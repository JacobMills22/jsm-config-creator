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
  background-color: var(--background-colour);
  display: flex;
  align-items: center;
  justify-content: center;
}

:root {
  --background-colour: #001f2b;
  --border-colour: lightblue;
  --active-colour: lightblue;
  --text-colour-light: white;
  --text-colour-dark: black;
}
</style>
