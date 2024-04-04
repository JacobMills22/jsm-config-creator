

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRootStore } from "@/stores/rootStore"

import TextButton from "@/components/common/TextButton.vue";

const { showSplashScreen } = storeToRefs(useRootStore());

</script>

<template>
    <div class="home-page">
        <div class="header">
            <TextButton class="header-button" @click="showSplashScreen = true;">Buttons</TextButton>
            <TextButton class="header-button">DPad</TextButton>
            <TextButton class="header-button">Triggers</TextButton>
            <TextButton class="header-button">Joysticks</TextButton>
            <TextButton class="header-button">Gyro</TextButton>
        </div>
    </div>
</template>

<style scoped>
.home-page {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
}

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.header-button {
    height: 100%;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: large;
    border: none;
    border-radius: 0%;
}
</style>
