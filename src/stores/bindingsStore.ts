import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'

import { GamepadBind } from '@/backend/GamepadBind'
import { MkbBind } from '@/backend/MkbBind'

export interface BindingInfo {
    mkbBind: MkbBind
    comment: String
}

export const useBindingsStore = defineStore('bindingsStore', () => {
    const bindings: Ref<Map<GamepadBind, BindingInfo>> = ref(new Map<GamepadBind, BindingInfo>())

    const addBinding = (gamepadBind: GamepadBind, bindingInfo: BindingInfo) => {
        bindings.value.set(gamepadBind, bindingInfo)
    }

    return { bindings, addBinding }
})
