<template>
  <div class="message-note" :class="{ [theme]: true, sticky }">
    <slot />
  </div>
</template>

<script>
import { MessageBlockCommon } from "./common";

export default {
  mixins: [MessageBlockCommon],
  props: {
    sticky: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.message-note {
  font-size: var(--font-size-x-small);

  padding: 0 1em;
  margin: 0 0 0.5rem;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    backdrop-filter: blur(10px);
  }
}

.to,
.option {
  text-align: right;
}
</style>
