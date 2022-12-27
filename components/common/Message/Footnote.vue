<template>
  <div class="message-note" :class="{ [theme]: true }">
    <slot />
  </div>
</template>

<script>
import { MessageBlockCommon } from "./common";

export default {
  mixins: [MessageBlockCommon]
};
</script>

<style lang="scss" scoped>
.message-note {
  font-size: var(--font-size-x-small);

  padding: 0 1em;
  margin: 0 0 0.5rem;
}

.to,
.option {
  text-align: right;
}
</style>
