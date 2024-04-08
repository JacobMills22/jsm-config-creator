

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRootStore } from "@/stores/rootStore"

import GenericButton from "@/components/common/GenericButton.vue";

const { showSplashScreen } = storeToRefs(useRootStore());
</script>

<template>
    <div class="splash-page">
        <GenericButton class="splash-page-button" @click="showSplashScreen = false">New</GenericButton>
        <GenericButton class="splash-page-button">Load</GenericButton>
    </div>
</template>

<style scoped>

.splash-page {
    width: 90%;
    height: 100%;
    left: 5%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

.splash-page-button {
    flex: 1
}
</style>
