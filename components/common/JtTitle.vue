<template>
  <component :is="tagName" class="title">
    <span class="inner">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: "span"
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;

  min-height: var(--title-height, 32px);
}
</style>
