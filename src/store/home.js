import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", () => {
  //state
  const name = ref("Jacky");

  // actions
  const setName = () => {
    name.value = "mike";
  };

  // getters
  const fullName = computed(() => `full name is ${name.value}`);

  return {
    name,
    setName,
    fullName,
  };
});
