<template>
  <component
    :is="tagName"
    v-if="!loadingMedia"
    class="message"
    :class="{ [theme]: true }"
  >
    <div v-if="media" class="message-media">
      <img :src="mediaEl" alt="" />
    </div>
    <div class="message-inner">
      <slot />
    </div>
  </component>
  <div v-else>
    <MessageTyping :theme="theme" />
  </div>
</template>

<script>
import { loadImage } from "~/assets/js/utils";
import { MessageBlockCommon } from "./common";

export default {
  mixins: [MessageBlockCommon],
  props: {
    tagName: {
      type: String,
      default: "div"
    }
  },
  data() {
    return {
      loaded: false,
      mediaEl: null
    };
  },
  computed: {
    loadingMedia() {
      return this.media && !this.loaded;
    }
  },
  async mounted() {
    if (this.media) {
      this.mediaEl = await loadImage(this.media);
      this.loaded = true;
    }

    this.$emit("next");
  }
};
</script>

<style lang="scss" scoped>
.message {
  display: inline-block;

  border-radius: 1em;

  background: var(--message-bg, var(--color-blue));
  box-shadow: inset 5px -10px 20px var(--message-bg-shadow, rgba(255, 255, 255, 0.25));

  color: var(--message-fg, var(--color-white));

  margin: 0 0 0.5rem;
  padding: 0;

  justify-self: var(--message-justify, flex-start);

  border: none;
  overflow: hidden;
  isolation: isolate;
  text-align: left;

  max-width: 90%;

  &-inner {
    padding: 1em;
  }

  @include tablet {
    max-width: 50%;
  }
}

.to {
  --message-bg: var(--color-white);
  --message-bg-shadow: rgba(var(--color-blue-rgb), 0.1);
  --message-fg: var(--color-text);

  --message-justify: flex-end;
  text-align: right;
}

.option {
  --message-bg: var(--color-gray-4);
  --message-bg-shadow: rgba(0, 0, 0, 0.1);
  --message-fg: var(--color-text);
  --message-justify: flex-end;
  text-align: right;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    --message-bg: var(--color-gray-5);
    outline: 2px solid var(--color-blue);
  }
}
</style>
