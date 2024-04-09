import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

import { GamepadBind } from '@/backend/GamepadBind'
import { MkbBind } from '@/backend/MkbBind'
import Binding from '@/components/pages/Homepage/Binding.vue'

export interface Binding {
    gamepadBind: GamepadBind
    mkbBind: MkbBind
}

export const useBindingsStore = defineStore('bindingsStore', () => {
    const bindings = ref(new Map<GamepadBind, MkbBind>()) as Ref<Map<GamepadBind, MkbBind>>

    const addBinding = (binding: Binding) => {
        bindings.value.set(binding.gamepadBind, binding.mkbBind)
    }

    return { bindings, addBinding }
})
