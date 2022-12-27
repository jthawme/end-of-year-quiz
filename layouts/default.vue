<template>
  <main>
    <Marquee class="banner banner-top" :duration="5" :repeat="10">
      <span class="marquee-item-wrap">
        <span class="marquee-item marquee-item-one">Year in Review</span>
        <span class="marquee-item marquee-item-two">Year in Review</span>
      </span>
    </Marquee>

    <nuxt />

    <Marquee class="banner banner-bottom" reverse :duration="5" :repeat="10">
      <span class="marquee-item-wrap">
        <span class="marquee-item marquee-item-one">Year in Review</span>
        <span class="marquee-item marquee-item-two">Year in Review</span>
      </span>
    </Marquee>
  </main>
</template>

<script>
import smoothscroll from "smoothscroll-polyfill";
import { registerBootlegVH } from "~/assets/js/utils";
import { BreakPointSet } from "~/assets/js/mixins/breakpoints";

export default {
  mixins: [BreakPointSet],
  mounted() {
    smoothscroll.polyfill();

    registerBootlegVH();
    // prevent the add to home screen banner
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
    });
  },
  methods: {
    onPreloaderDisappear() {
      this.$store.commit("setPreloaderActive", false);
    }
  }
};
</script>
<style lang="scss">
@import "~assets/scss/parts/fonts";

:root {
  --color-white: #fff;
  --color-black: #221f1f;

  --color-text: var(--color-black);
  --color-bg: var(--color-white);

  --color-gray-2: #f9f9f9;
  --color-gray-3: #eeeeee;
  --color-gray-4: #d2d2d2;
  --color-gray-5: #a3a3a3;

  --color-blue-rgb: 0, 87, 255;
  --color-blue: rgba(var(--color-blue-rgb), 1);
  --color-red-rgb: 255, 61, 18;
  --color-red: rgba(var(--color-red-rgb), 1);

  --font-size-x-small: 10px;
  --font-size-small: 12px;
  --font-size-normal: 16px;
  --font-size-medium: 21px;
  --font-size-large: 24px;
  --font-size-x-large: 36px;
  --font-size-xx-large: 46px;
  --font-size-xxx-large: 56px;

  --border-width: 1px;

  --font-family-body: "Inter", sans-serif;
  --font-family-headline: "Inter", sans-serif;

  --font-weight-normal: 600;
  --font-weight-bold: 900;

  @for $i from 1 through 20 {
    --size-unit-#{$i}: #{$i * 5px};
  }
}

// ::-webkit-scrollbar {
//   width: 0px; /* remove scrollbar space */
//   background: transparent; /* optional: just make scrollbar invisible */
// }

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-family: var(--font-family-body);
  font-size: var(--font-size-normal);
  color: var(--color-text);

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  background-color: var(--color-bg);

  line-height: 1.25;
}

input,
button {
  font-family: inherit;
  font-weight: inherit;
}

html,
body {
  width: 100%;
  min-height: 100%;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.fade {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-fast {
  opacity: 1;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.5s;
}
.fade-fast-enter, .fade-fast-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

img {
  max-width: 100%;
}

main {
  display: grid;

  grid-template-rows: 20px calc(100vh - 40px) 20px;

  height: 100vh;
}

.marquee-item {
  padding: 0 5px;

  font-weight: var(--font-weight-bold);

  text-transform: uppercase;

  &-wrap {
    display: flex;
  }

  &-two {
    color: var(--color-red);
  }
}

.banner {
  background-color: var(--color-bg);

  min-height: 20px;
}
</style>
