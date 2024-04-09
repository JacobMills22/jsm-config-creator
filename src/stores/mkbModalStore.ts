import { defineStore } from 'pinia'
import { ref } from 'vue'

import { GamepadBind } from '@/backend/GamepadBind'

export const useMkbModalStore = defineStore('mkbModalStore', () => {
    const showMkbModal = ref(false)
    const selectedGamepadBinding = ref(GamepadBind.NoInput)

    const openModal = (gamepadBind: GamepadBind) => {
        selectedGamepadBinding.value = gamepadBind
        showMkbModal.value = true
    }

    const closeModal = () => {
        showMkbModal.value = false
    }

    return { showMkbModal, selectedGamepadBinding, openModal, closeModal }
})
