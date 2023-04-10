import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      name: "mike",
    };
  },
  actions: {
    setName(str) {
      this.name = str;
    },
  },
  getters: {
    fullName: (state) => `full name is ${state.name}`,
  },
});
