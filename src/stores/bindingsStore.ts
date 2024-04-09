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
    const bindings = ref([]) as Ref<Array<Binding>>

    const addBinding = (newBinding: Binding) => {
        const index = bindings.value.findIndex(
            (binding) => binding.gamepadBind === newBinding.gamepadBind
        )

        if (index !== -1) bindings.value.splice(index, 1, newBinding)
        else bindings.value.push(newBinding)
    }

    return { bindings, addBinding }
})
