<script setup lang="ts">
import Root from "./components/Root.vue";
</script>

<template>
  <Root/>
</template>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-colour-light);
  background-color: var(--body-background-colour);
}

:root {
  --body-background-colour: #001720;
  --background-colour: #001f2b;
  --border-colour: lightblue;
  --active-colour: lightblue;
  --text-colour-light: white;
  --text-colour-dark: black;
}
</style>
