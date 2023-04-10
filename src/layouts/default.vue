<script setup>
</script>

<template>
  <li>
    <a to="/">
      <NavIcon name="rss" text="FEED" color="#181818"></NavIcon>
    </a>
  </li>

  <li>
    <a to="/">
      <NavIcon name="users" text="NETWORK" color="#181818"></NavIcon>
    </a>
  </li>

  <li>
    <a to="/">
      <NavIcon name="briefcase" text="JOB" color="#181818"></NavIcon>
    </a>
  </li>

  <li>
    <a to="/">
      <NavIcon name="message-square" text="CHAT" color="#181818"></NavIcon>
    </a>
  </li>

  <li>
    <a to="/">
      <NavIcon name="bell" text="NOTICES" color="#181818"></NavIcon>
    </a>
  </li>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>