

<script setup lang="ts">
    import GenericButton from "@/components/common/GenericButton.vue";
</script>

<template>
    <div class="binding-row">
        <div class="gamepad-binding">N</div>
        <div class="comment">This is a comment</div>
        <GenericButton class="kbm-binding">W Key</GenericButton>
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
