import { defineStore } from "pinia"
import { ref } from "vue"

export const useRootStore = defineStore('rootStore', () => {
    const showSplashScreen = ref (true)

    return { showSplashScreen }
  })