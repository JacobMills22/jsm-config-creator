<script setup lang="ts">
import { useMkbModalStore } from '@/stores/mkbModalStore'
import { useBindingsStore } from '@/stores/bindingsStore'

import { computed, reactive, type PropType } from 'vue'
import GenericButton from '@/components/common/GenericButton.vue'

import { GamepadBind } from '@/backend/GamepadBind'
import { mkbBindToJsmString } from '@/backend/MkbBind'
import { MkbBind } from '@/backend/MkbBind'

const mkbModalStore = useMkbModalStore()
const bindingsStore = useBindingsStore()

const props = defineProps({
    gamepadBind: {
        type: Number as PropType<GamepadBind>,
        required: true
    },
    gamepadBindString: String
})

const bindingInfo = reactive({ mkbBind: MkbBind.NoInput, comment: 'No Comment' })
bindingsStore.addBinding(props.gamepadBind, bindingInfo)

const kbmBindingString = computed(() => {
    return mkbBindToJsmString.get(bindingInfo.mkbBind)
})

const mkbBindingClicked = () => {
    mkbModalStore.openModal(props.gamepadBind)
}
</script>

<template>
    <div class="binding-row">
        <div class="gamepad-binding">{{ gamepadBindString }}</div>
        <input class="comment" v-model="bindingInfo.comment" />
        <GenericButton class="kbm-binding" @click="mkbBindingClicked()">{{
            kbmBindingString
        }}</GenericButton>
        <GenericButton class="binding-options"></GenericButton>
    </div>
</template>

<style scoped>
.binding-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px var(--border-colour) solid;
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
    width: 200px;
    height: 45px;
    padding: 5px;
}

.binding-options {
    width: 45px;
    height: 45px;
}
</style>
