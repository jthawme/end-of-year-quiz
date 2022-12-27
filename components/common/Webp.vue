<template>
  <div class="img" :class="{ loaded, contain }">
    <img :src="placeholder" class="placeholder" />
    <picture @load="onLoad">
      <source :srcset="webp" type="image/webp" />
      <img :src="fallback" :alt="alt" loading="lazy" @load="onLoad" />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    contain: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    placeholderExtension: {
      type: String,
      default: ".png"
    },
    fallbackExtension: {
      type: String,
      default: ".png"
    }
  },
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    baseUrl() {
      if (!this.src.includes(".")) {
        return this.src;
      }

      const parts = this.src.split(".");
      parts.splice(parts.length - 1, 1);

      return parts.join(".");
    },
    webp() {
      return `${this.baseUrl}.webp`;
    },
    fallback() {
      return `${this.baseUrl}.${this.fallbackExtension}`;
    },
    placeholder() {
      return `${this.baseUrl}.placeholder${this.placeholderExtension}`;
    }
  },
  methods: {
    onLoad() {
      this.loaded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  position: relative;

  line-height: 0;
}

.placeholder,
picture {
  width: 100%;
}

.placeholder {
  .loaded & {
    opacity: 0;
    pointer-events: none;
  }
}

picture {
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;

  .loaded & {
    opacity: 1;
    pointer-events: all;
  }
}

.contain picture img {
  height: 100%;
  width: 100%;

  object-fit: contain;
}
</style>
