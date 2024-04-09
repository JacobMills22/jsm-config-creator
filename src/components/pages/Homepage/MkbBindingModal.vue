<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMkbModalStore } from '@/stores/mkbModalStore'
import { useBindingsStore } from '@/stores/bindingsStore'
import type { BindingInfo } from '@/stores/bindingsStore'

import GenericButton from '@/components/common/GenericButton.vue'
import { MkbBind } from '@/backend/MkbBind'

const mkbModalStore = useMkbModalStore()
const bindingsStore = useBindingsStore()

const { selectedGamepadBinding } = storeToRefs(mkbModalStore)
const { bindings } = storeToRefs(bindingsStore)

const selectMkbBinding = (mkbBind: MkbBind) => {
    let binding: BindingInfo | undefined = bindings.value.get(selectedGamepadBinding.value)
    if (binding == undefined) return

    binding.mkbBind = mkbBind
    mkbModalStore.closeModal()
}
</script>

<template>
    <div class="container">
        <GenericButton @click="selectMkbBinding(MkbBind.W)">W Key</GenericButton>
        <GenericButton @click="selectMkbBinding(MkbBind.S)">S Key</GenericButton>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
}
</style>
