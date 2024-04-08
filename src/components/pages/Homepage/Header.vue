<script setup>
    import GenericButton from "@/components/common/GenericButton.vue";
</script>

<template>
    <div class="header">
        <GenericButton class="header-button" @click="showSplashScreen = true;">Buttons</GenericButton>
        <GenericButton class="header-button">Joysticks</GenericButton>
        <GenericButton class="header-button">Gyro</GenericButton>
        <GenericButton class="header-button">Settings</GenericButton>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
}

.header-button {
    height: 100%;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: large;
    border: none;
    border-radius: 0%;
}
</style>