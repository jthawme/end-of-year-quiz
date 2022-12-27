<template>
  <section class="outer">
    <div class="contacts">
      <div class="contacts-row active">
        <div class="contacts-row-image">
          <img v-if="imageEl" :src="imageEl" alt="" />
        </div>
        <div class="contacts-row-content">
          <span class="contacts-row-name">{{ currentContact.name }}</span>
          <span v-if="$store.state.lastMessage" class="contacts-row-time">{{
            formatTimestamp($store.state.lastMessage.timestamp)
          }}</span>
          <span v-if="$store.state.lastMessage" class="contacts-row-message">{{
            $store.state.lastMessage.message
          }}</span>
        </div>
      </div>
      <div class="contacts-row">
        <div class="contacts-row-image">
          <img src="https://i.pravatar.cc/250?u=2021" alt="" />
        </div>
        <div class="contacts-row-content">
          <span class="contacts-row-name">2021</span>
          <span v-if="$store.state.lastMessage" class="contacts-row-time"
            >1 year ago</span
          >
          <span v-if="$store.state.lastMessage" class="contacts-row-message"
            >Haha nah, you were wasted!</span
          >
        </div>
      </div>
      <div class="contacts-row">
        <div class="contacts-row-image">
          <img src="https://i.pravatar.cc/250?u=2020" alt="" />
        </div>
        <div class="contacts-row-content">
          <span class="contacts-row-name">2020</span>
          <span v-if="$store.state.lastMessage" class="contacts-row-time"
            >2 years ago</span
          >
          <span v-if="$store.state.lastMessage" class="contacts-row-message"
            >For real? piss off</span
          >
        </div>
      </div>
    </div>

    <div class="main">
      <header>
        <div class="contact-info">
          <div class="contact-info-image">
            <img v-if="imageEl" :src="imageEl" alt="" />
          </div>
          <span class="contact-info-name">{{ currentContact.name }}</span>
        </div>
      </header>

      <div ref="content" class="main-content">
        <div v-resize="onResize" class="main-content-inner">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { format } from "date-fns";
import { loadImage } from "~/assets/js/utils";
export default {
  data() {
    return {
      imageEl: null
    };
  },
  computed: {
    currentContact() {
      return {
        image: `https://source.unsplash.com/random/100x100?person`,
        name: "2022"
      };
    }
  },
  async mounted() {
    this.imageEl = await loadImage(this.currentContact.image);
  },
  methods: {
    onResize() {
      this.$refs.content.scrollTo(
        0,
        this.$refs.content
          .querySelector(".main-content-inner")
          .getBoundingClientRect().height
      );
    },
    formatTimestamp(timestamp) {
      return format(timestamp, "H:mm aaaa");
    }
  }
};
</script>

<style lang="scss" scoped>
.outer {
  display: flex;

  width: 100%;

  @include tablet {
    width: calc(100% - 40px);
    max-width: 950px;
    margin: 20px auto;

    overflow: hidden;
    border-radius: 20px;

    isolation: isolate;
    border: 0.5px solid #e5e5e5;

    box-shadow: 0 0 10px rgba(0, 2px, 0, 0.05);
  }
}

header {
  background-color: var(--color-gray-3);
  border-bottom: var(--border-width) solid var(--color-gray-4);

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 10px;
}

.contact-info {
  display: flex;

  flex-direction: column;

  align-items: center;
  width: 60px;

  &-name {
    font-size: var(--font-size-small);
  }
}

.contact-info-image,
.contacts-row-image {
  position: relative;

  width: 100%;
  height: 0;

  padding-bottom: 100%;

  border-radius: 100%;
  line-height: 0;
  overflow: hidden;

  margin-bottom: 0.4em;
  background-color: var(--color-gray-4);

  img {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
  }
}

.main {
  display: grid;

  grid-template-rows: auto 1fr;

  flex-basis: 100%;

  &-content {
    background-color: var(--color-gray-2);

    padding: 1em;

    overflow: auto;

    &-inner {
      display: grid;
    }
  }
}

.contacts {
  display: none;

  border-right: 0.5px solid #e5e5e5;
  width: 300px;

  @include tablet {
    display: block;
  }

  &-row {
    display: grid;

    grid-template-columns: 50px 3fr;
    gap: 1em;

    padding: 0.5em;

    border-bottom: 0.5px solid #e5e5e5;

    font-size: var(--font-size-small);

    &-content {
      display: grid;

      grid-template-columns: 1fr auto;

      padding-top: 0.5em;
    }

    &-time {
      text-align: right;
    }

    &-message {
      grid-column: 1 / span 2;

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      color: var(--color-gray-4);
    }

    &.active {
      background-color: var(--color-blue);
      color: white;

      .contacts-row-message {
        color: white;
      }
    }
  }
}
</style>
