<template>
  <component :is="iconComponent" v-if="noWrap" />
  <span v-else :class="size" class="jt-icon">
    <component :is="iconComponent" />
  </span>
</template>

<script>
import x from "~/assets/img/icons/x.svg?inline";
import twitter from "~/assets/img/icons/twitter.svg?inline";

const icons = {
  x,
  twitter
};

const iconKeys = Object.keys(icons);

export default {
  props: {
    name: {
      type: String,
      validator: prop => iconKeys.includes(prop),
      required: true
    },
    size: {
      type: String,
      validator: prop =>
        ["free", "small", "medium", "large", "xlarge"].includes(prop),
      default: "free"
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconComponent: function() {
      return icons[this.name];
    }
  }
};
</script>

<style lang="scss" scoped>
.jt-icon {
  display: inline-block;

  width: var(--icon-size, 1em);
  height: var(--icon-size, 1em);

  color: var(--icon-color, inherit);

  line-height: 0;

  svg {
    width: 100%;
    height: 100%;
  }
}

.safari .jt-icon svg {
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}

.small {
  --icon-size: var(--icon-small);
}

.medium {
  --icon-size: var(--icon-medium);
}

.large {
  --icon-size: var(--icon-large);
}

.xlarge {
  --icon-size: var(--icon-x-large);
}
</style>
