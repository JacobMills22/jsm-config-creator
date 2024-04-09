<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMkbModalStore } from '@/stores/mkbModalStore'
import { GamepadBind } from '@/backend/GamepadBind'
import { generateConfig } from '@/backend/configGenerator'
import { useBindingsStore } from '@/stores/bindingsStore'
import { ref } from 'vue'
import type { Ref } from 'vue'

import Header from '@/components/pages/Homepage/Header.vue'
import Binding from '@/components/pages/Homepage/Binding.vue'
import MkbBindingModal from '@/components/pages/Homepage/MkbBindingModal.vue'
import GenericButton from '@/components/common/GenericButton.vue'

const { showMkbModal } = storeToRefs(useMkbModalStore())
const { bindings } = storeToRefs(useBindingsStore())

const config = ref([]) as Ref<Array<string>>
</script>

<template>
    <div class="home-page">
        <div style="padding: 15px">
            <Header class="header" />
            <h2>Button Pad</h2>
            <div class="binding-container">
                <Binding :gamepad-bind="GamepadBind.North" gamepad-bind-string="N" />
                <Binding :gamepad-bind="GamepadBind.East" gamepad-bind-string="E" />
                <Binding :gamepad-bind="GamepadBind.South" gamepad-bind-string="S" />
                <Binding :gamepad-bind="GamepadBind.West" gamepad-bind-string="W" />
            </div>
            <h2>D-Pad</h2>
            <h2>Bumpers</h2>
            <h2>Triggers</h2>
            <h2>Menus</h2>
        </div>
        <GenericButton @click="config = generateConfig(bindings)">Generate</GenericButton>

        <textarea style="height: 400px">{{ config.join('\n') }}</textarea>
        <MkbBindingModal v-if="showMkbModal" />
    </div>
</template>

<style scoped>
.home-page {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
}

.binding-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

.binding-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.gamepad-binding {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 2px var(--active-colour) solid;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: var(--text-colour-light);
    font-size: medium;
    font-weight: bold;
    user-select: none;
}

.comment {
    flex: 1;
    font-size: medium;
    text-align: end;
}

.kbm-binding {
    height: 30px;
    width: 200px;
    border-radius: 3%;
    padding: 10px;
    background-color: var(--active-colour);
    color: var(--background-colour);
    font-size: large;
    font-weight: bold;
    text-align: center;
}

.binding-options {
    width: 30px;
    height: 30px;
    border-radius: 3%;
    padding: 10px;
    background-color: var(--active-colour);
    color: var(--background-colour);
    font-size: large;
    font-weight: bold;
}
</style>
@/stores/mkbModalStore
