import { Breakpoint } from "~/assets/js/mixins/breakpoints";

export const state = () => {
  return {
    [Breakpoint.Desktop]: true,
    [Breakpoint.Tablet]: true,
    [Breakpoint.LargeMobile]: true
  };
};

export const mutations = {
  setBreakpoint(state, val) {
    state[val.key] = val.value;
  }
};
