<template>
  <MessageBlock :theme="theme">
    <div class="dots">
      <div v-for="idx in 3" :key="idx" class="dots-item" />
    </div>
  </MessageBlock>
</template>

<script>
import { MessageBlockCommon } from "./common";

export default {
  mixins: [MessageBlockCommon]
};
</script>

<style lang="scss">
.dots {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;

  &-item {
    width: 0.5em;
    height: 0.5em;

    background-color: var(--color-gray-4);
    border-radius: 100%;

    animation: {
      duration: 1s;
      iteration-count: infinite;
      direction: alternate;
      name: FLICKER;
    }

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
  }
}

@keyframes FLICKER {
  to {
    opacity: 0.5;
  }
}
</style>
