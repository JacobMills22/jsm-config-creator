<script setup lang="ts">
import Root from "./components/Root.vue";
</script>

<template>
  <Root/>
</template>

<style>
body {
  margin: 0px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-colour-light);
}

:root {
  --background-colour: #001f2b;
  --border-colour: lightblue;
  --active-colour: lightblue;
  --text-colour-light: white;
  --text-colour-dark: black;
}
</style>
