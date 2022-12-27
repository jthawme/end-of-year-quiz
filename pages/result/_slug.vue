<template>
  <div>
    <span class="visually-hidden">{{ message }}</span>
  </div>
</template>

<script>
import { ANSWER_LARGE } from "~/assets/js/questions";
export default {
  async asyncData({ route }) {
    const { slug } = route.params;

    if (ANSWER_LARGE[slug]) {
      const { media, message } = ANSWER_LARGE[slug];

      return { media, message };
    }

    return { message: "" };
  },
  mounted() {
    this.$router.push({ path: "/", replace: true });
  },
  head() {
    if (this.media) {
      return {
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.message
          },
          {
            name: "twitter:image:src",
            content: `${process.env.PROJECT_DOMAIN}${this.media}`,
            hid: "twitter-image"
          },
          {
            name: "og:image",
            property: "og:image",
            content: `${process.env.PROJECT_DOMAIN}${this.media}`,
            hid: "og-image"
          }
        ]
      };
    }
  }
};
</script>
