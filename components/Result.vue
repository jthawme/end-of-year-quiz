<template>
  <div class="wrapper">
    <a target="_blank" class="large" :href="twitterURL" @click="onClick"
      >SHARE YOUR RESULT</a
    >
    <a target="_blank" class="large" :href="twitterURL" @click="onClick"
      >SHARE YOUR RESULT</a
    >
    <a target="_blank" class="large" :href="twitterURL" @click="onClick"
      >SHARE YOUR RESULT</a
    >

    <p>
      This site was made by me,
      <a href="https://jthaw.me" target="_blank">jthaw.me</a>
    </p>
    <p></p>
    <p>
      You can find the code here
      <a href="https://github.com/jthawme/end-of-year-quiz" target="_blank"
        >on github</a
      >
    </p>
    <p>
      Look on my site to see more work like this, and sign up to my
      <a href="https://jthaw.me/newsletter" target="_blank">newsletter</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      required: true
    }
  },
  computed: {
    text() {
      return `I took this quiz to see what event in 2022 I was, omg!!`;
    },
    url() {
      return `https://2022.jthaw.club/result/${this.result}`;
    },
    via() {
      return `jthawme`;
    },
    twitterURL() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        this.text
      )}&url=${encodeURIComponent(this.url)}&via=${this.via}`;
    }
  },
  methods: {
    async onClick(e) {
      if (navigator.share) {
        e.preventDefault();
        try {
          await navigator.share({
            text: this.text,
            url: this.url,
            title: "2022 End of Year Quiz"
          });
        } catch {
          window.open(this.twitterURL, "_blank");
        }
      }
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  text-align: center;
  border-top: 0.5px solid var(--color-gray-4);

  padding: 2em;

  a {
    color: var(--color-blue);
    text-decoration: none;

    &:hover,
    &:focus-visible {
      opacity: 0.75;
    }
  }
}

.large {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bold);
}
</style>
