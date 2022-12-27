<template>
  <div class="content">
    <DeviceWrap>
      <div v-for="item in alteredList" :key="item.id" class="block">
        <MessageBlock
          v-if="isAutomatic(item)"
          :media="item.media"
          :theme="item.reply"
          @next="onAdvance"
          >{{ item.message }}</MessageBlock
        >
        <div v-else-if="isManual(item) && item.options" class="message-list">
          <MessageFootnote v-if="item.last" :theme="item.reply" sticky>
            <span>Click one of the messages to choose</span>
          </MessageFootnote>
          <MessageBlock
            v-for="option in item.options"
            :key="option.value"
            tag-name="button"
            theme="option"
            :media="option.media"
            @click.native="answer(option)"
            >{{ option.label }}</MessageBlock
          >
        </div>
        <MessageFootnote v-if="item.last" :theme="item.reply">
          <span v-if="isAutomatic(item) && item.reply === 'from'"
            >Seen {{ formatTimestamp(item.timestamp) }}</span
          >
          <span v-if="isAutomatic(item) && item.reply === 'to'"
            >Sent {{ formatTimestamp(item.timestamp) }}</span
          >
        </MessageFootnote>
      </div>
      <div v-if="typing" class="typing">
        <MessageTyping :theme="typing" />
      </div>

      <div v-if="done && !!result">
        <Result :result="result" />
      </div>
    </DeviceWrap>
  </div>
</template>

<script>
import { format } from "date-fns";

import DeviceWrap from "~/components/DeviceWrap.vue";

import { ANSWER, questions, SCRIPT_TYPE } from "~/assets/js/questions";
import { timer } from "~/assets/js/utils";
import Result from "~/components/Result.vue";

const convertMessage = (message, info) => {
  if (typeof message === "undefined") {
    return null;
  }

  if (typeof message === "string") {
    return message;
  }

  return message(info);
};

const getMode = answers => {
  if (answers.length === 0) {
    return null;
  }

  const nums = answers.reduce((p, c) => {
    if (!p[c.value]) {
      p[c.value] = 0;
    }

    p[c.value]++;

    return p;
  }, {});

  const data = Object.entries(nums);
  data.sort((a, b) => {
    return b[1] - a[1];
  });

  return data[0][0];
};

export default {
  components: { DeviceWrap, Result },
  data() {
    return {
      list: [],
      index: -1,
      answers: [],
      // index: 46,
      // answers: [
      //   {
      //     value: ANSWER.CLIMATE_CHANGE,
      //     label: `Fighting for a social cause like climate change`
      //   }
      // ],
      typing: "from",
      done: false
    };
  },
  computed: {
    alteredList() {
      return this.list.map((item, idx, arr) => {
        return {
          ...item,
          last: !arr[idx + 1] || arr[idx + 1].reply !== item.reply
        };
      });
    },
    result() {
      return getMode(this.answers);
    },
    contextualInfo() {
      return {
        answers: this.answers,
        lastAnswer: this.answers[this.answers.length - 1],
        result: this.result
      };
    }
  },
  mounted() {
    this.playNext();

    // console.log(
    //   questions
    //     .filter(item => item.reply === REPLY_TYPE.OPTION)
    //     .reduce((p, c) => {
    //       c.options.forEach(opt => {
    //         if (!p[opt.value]) {
    //           p[opt.value] = 0;
    //         }

    //         p[opt.value]++;
    //       });

    //       return p;
    //     }, {})
    // );
  },
  methods: {
    async playNext() {
      this.index = this.index + 1;

      const current = questions[this.index];

      if (!current) {
        console.log("done", this.contextualInfo);
        this.done = true;
        return;
      }

      if (current.typeDelay) {
        this.typing = current.reply;
        await timer(current.typeDelay);
        this.typing = null;
      }

      this.addToList(current);
    },
    async onAdvance() {
      const current = questions[this.index];
      await timer(current.readDelay || 500);
      this.playNext();
    },
    addToList({ message, media, ...item }) {
      const block = {
        ...item,
        media: convertMessage(media, this.contextualInfo),
        message: convertMessage(message, this.contextualInfo),
        timestamp: Date.now()
      };
      this.list.push(block);

      if (block.message) {
        this.$store.commit("setLastMessage", block);
      }
    },
    isAutomatic({ type }) {
      return type === SCRIPT_TYPE.AUTOMATIC;
    },
    isManual({ type }) {
      return type === SCRIPT_TYPE.MANUAL;
    },
    isMedia({ type }) {
      return type === SCRIPT_TYPE.MEDIA;
    },
    formatTimestamp(timestamp) {
      return format(timestamp, "H:mm aaaa");
    },
    answer(value) {
      this.answers.push(value);
      this.list.splice(this.list.length - 1, 1);
      this.playNext();
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;

  width: 100%;
}

.block {
  display: grid;
}

.message-list {
  display: flex;

  flex-direction: column;

  align-items: flex-end;
}

.typing {
  display: grid;
}
</style>
