<template>
  <component
    :is="tagName"
    v-bind="tagProps"
    class="btn"
    :class="{ disabled, dummy }"
  >
    <span class="inner">
      <slot />
    </span>
  </component>
</template>

<script>

export default {
  props: {
    dummy: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tagName: function() {
      if (this.to && !this.disabled) {
        if (this.to.startsWith("/")) {
          return "nuxt-link";
        }

        return "a";
      }

      if (this.dummy) {
        return "span";
      }

      return "button";
    },
    tagProps: function() {
      if (this.to) {
        if (this.to.startsWith("/")) {
          return {
            to: this.to
          };
        }

        return {
          href: this.to,
          target: "_blank"
        };
      }

      return {
        disabled: this.disabled
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;

  display: inline-flex;
  align-items: stretch;

  background-color: transparent;
  border: none;
  outline: 0;

  padding: 0;
  margin: 0;
  text-decoration: none;

  &:not(.disabled) {
    cursor: pointer;
  }

  &.disabled {
    opacity: 0.4;
  }
}

.btn:not(.disabled):hover,
.btn:not(.disabled):focus-visible {
  opacity: 0.2;
}
</style>
