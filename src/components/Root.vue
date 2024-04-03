<script setup lang="ts">
import TextButton from "./common/TextButton.vue"
</script>

<template>
    <div class="root">
        <div class="splash-page">
            <TextButton class="splash-page-button">New</TextButton>
            <TextButton class="splash-page-button">Load</TextButton>
        </div>
    </div>
</template>

<style scoped>
.root {
    background-color: var(--background-colour);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.splash-page {
    align-self: stretch;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px
}

.splash-page-button {
    flex: 1
}

</style>
