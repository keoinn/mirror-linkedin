<script setup>
import { storeToRefs } from "pinia";
// import { useCounterStore } from "@/store/counter.js";
// const counter = useCounterStore();

// import { useHomeStore } from "@/store/home.js";
// const store = useHomeStore();

import { useHomeStore } from "@/store/home.js";
// const { name, fullName, setName } = useHomeStore();
const store = useHomeStore();
const { name, fullName } = storeToRefs(store);
const { setName } = store;


</script>

<template>
  <!-- <h1>{{ counter.name }}</h1><br>
                          <h1>{{ counter.fullName }}</h1><br>
                          <button @click="counter.setName('')">Click</button> -->

  <!-- <h1>{{ store.name }}</h1><br>
            <h1>{{ store.fullName }}</h1><br>
            <button @click="store.setName('')">Click</button> -->

  <h1>{{ name }}</h1><br>
  <h1>{{ fullName }}</h1><br>
  <button @click="setName('TEE')">Click</button>
</template>
