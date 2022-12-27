export const MessageBlockCommon = {
  props: {
    theme: {
      type: String,
      default: "from",
      validator(val) {
        return ["from", "to", "option"].includes(val);
      }
    },
    media: {
      type: String,
      default: null
    }
  }
};
