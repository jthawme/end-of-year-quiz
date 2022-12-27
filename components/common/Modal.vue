<template>
  <transition name="fade" @enter="enter">
    <!-- <div v-if="open" v-scroll-lock="open" class="overlay"> -->

    <div v-if="open" v-scroll-lock="open" class="overlay">
      <button class="close" @click="onClose">
        <span class="close-bg" />
        <Icon class="close-icon" name="x" />
      </button>

      <div class="backdrop" @click="onClose" />

      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onClose() {
      this.$emit("close");
      this.unregisterEvents();
    },
    enter() {
      this.registerEvents();
      this.$emit("open");
    },
    onKeyUp(e) {
      if (e.key === "Escape") {
        this.onClose();
      }
    },
    registerEvents() {
      document.addEventListener("keyup", this.onKeyUp);
    },
    unregisterEvents() {
      document.removeEventListener("keyup", this.onKeyUp);
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 100;
}

.backdrop {
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.75);
}

.close {
  position: absolute;

  --icon-size: 1.4em;

  top: 0;
  right: 0;

  z-index: 10;

  width: 48px;
  height: 48px;

  color: var(--color-white);

  padding: 0.2em 0 0;

  border: none;
  border-radius: 100%;
  background-color: transparent;

  cursor: pointer;

  &-bg {
    position: absolute;

    top: 0;
    left: -50%;

    width: 200%;
    height: 100%;

    transform: skewX(45deg);
    background-color: var(--color-blue);
  }

  &-icon {
    position: relative;

    z-index: 1;

    margin-right: 10px;
  }

  &:hover,
  &:focus-visible {
    .close-bg {
      background-color: var(--color-blue-active);
    }
  }
}
</style>
