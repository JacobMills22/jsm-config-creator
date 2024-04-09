<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMkbModalStore } from '@/stores/mkbModalStore'
import { useBindingsStore } from '@/stores/bindingsStore'

import { computed, type PropType } from 'vue'
import GenericButton from '@/components/common/GenericButton.vue'

import { GamepadBind } from '@/backend/GamepadBind'
import { mkbBindToJsmString } from '@/backend/MkbBind'
import { MkbBind } from '@/backend/MkbBind'

const mkbModalStore = useMkbModalStore()

const { bindings } = storeToRefs(useBindingsStore())

const props = defineProps({
    gamepadBind: {
        type: Number as PropType<GamepadBind>,
        required: true
    },
    gamepadBindString: String
})

const kbmBindingString = computed(() => {
    const kbmBinding = bindings.value.get(props.gamepadBind)

    if (kbmBinding === undefined) return mkbBindToJsmString.get(MkbBind.NoInput)

    return mkbBindToJsmString.get(kbmBinding)
})

const mkbBindingClicked = () => {
    mkbModalStore.openModal(props.gamepadBind)
}
</script>

<template>
    <div class="binding-row">
        <div class="gamepad-binding">{{ gamepadBindString }}</div>
        <div class="comment">This is a comment</div>
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
