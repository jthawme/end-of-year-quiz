<template>
  <div
    class="marquee-wrapper"
    :class="{ reverse }"
    :style="{ '--marquee-duration': `${duration}s` }"
  >
    <div ref="track" class="marquee-track">
      <!-- <slot /> -->
      <div v-for="(item, index) in items" :key="index" class="item">
        <vnode :node="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    vnode: {
      functional: true,
      render: (h, ctx) => ctx.props.node
    }
  },
  props: {
    repeat: {
      type: Number,
      default: 2
    },
    duration: {
      type: Number,
      default: 1
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    items() {
      return new Array(this.repeat).fill(this.$slots.default[0]);
    }
  },
  mounted() {
    this.$refs.track.style.width = "0px";

    setTimeout(() => {
      this.$refs.track.removeAttribute("style");
    }, 250);
  }
};
</script>

<style lang="scss" scoped>
.marquee-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.marquee-track {
  // display: table;
  white-space: nowrap;
  // display: grid;
  // grid-auto-columns: 1fr;
  // grid-auto-flow: column;

  width: max-content;
}
.item {
  display: inline-block;
  margin-right: var(--marquee-spacing, 0);
  animation: {
    name: MARQUEE;
    duration: var(--marquee-duration);
    iteration-count: infinite;
    timing-function: var(--marquee-timing-function, linear);
  }
}

.reverse .item {
  animation-name: MARQUEEREVERSE;
}

@keyframes MARQUEE {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes MARQUEEREVERSE {
  from {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
