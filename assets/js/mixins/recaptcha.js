export const CaptchaMixin = {
  methods: {
    getRecaptcha() {
      return new Promise(resolve => {
        // eslint-disable-next-line no-undef
        grecaptcha.ready(() => {
          // eslint-disable-next-line no-undef
          grecaptcha
            .execute("6Ld13VYeAAAAAGZnDW4OxIC2YFZ4KDrJ6c4bfXoV", {
              action: "submit"
            })
            .then(token => {
              resolve(token);
            });
        });
      });
    }
  }
};
