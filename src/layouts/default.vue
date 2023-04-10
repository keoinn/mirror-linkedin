<script setup>
</script>

<template>
    <main>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/pinia-data">Pinia Test</router-link>
      </nav>
      <router-view />
    </main>
  </template>