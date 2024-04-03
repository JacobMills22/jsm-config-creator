<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRootStore } from "@/stores/rootStore.ts";

const { showSplashScreen } = storeToRefs(useRootStore());

import TextButton from "./common/TextButton.vue";

</script>

<template>
    <div class="root">
        <Transition>
            <div v-show="showSplashScreen" class="splash-page">
                <TextButton class="splash-page-button" @click="showSplashScreen = false">New</TextButton>
                <TextButton class="splash-page-button">Load</TextButton>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media screen and (min-width: 1250px) {
    .root {
        width: 1250px;
    }
}

.splash-page {
    align-self: stretch;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.splash-page-button {
    flex: 1
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
