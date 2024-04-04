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
  --body-background-colour: #0c1821;
  --body-border-colour: #1B2A41;
  --background-colour: #0c1821;
  --border-colour: #CCC9DC;
  --active-colour: #CCC9DC;
  --text-colour-light: #CCC9DC;
  --text-colour-dark: #0c1821;
}
</style>
