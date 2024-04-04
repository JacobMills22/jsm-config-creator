<script setup lang="ts">
import { storeToRefs } from "pinia";
import HomePage from "@/components/pages/HomePage.vue"
import SplashPage from "@/components/pages/SplashPage.vue"

import { useRootStore } from "@/stores/rootStore"

const { showSplashScreen } = storeToRefs(useRootStore());

</script>

<template>
    <div class="root">
        <Transition>
            <SplashPage v-if="showSplashScreen"/>
        </Transition>
        <Transition>
            <HomePage v-if="!showSplashScreen"/>
        </Transition>
    </div>
</template>

<style scoped>
.root {
    width: 100%;
    height: 100vh;
    background-color: var(--background-colour);
    position: absolute;
}

@media screen and (min-width: 1252px) {
    .root {
        width: 1250px;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        border-left: 1px var(--body-border-colour) solid;
        border-right: 1px var(--body-border-colour) solid;
    }
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
