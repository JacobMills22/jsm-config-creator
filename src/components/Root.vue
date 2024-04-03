<script setup lang="ts">
</script>

<template>
    <div class="root">
        <div class="splash-page">
            <button>New</button>
            <button>Load</button>
        </div>
    </div>
</template>

<style scoped>
.root {
    background-color: #001f2b;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.splash-page {
    align-self: stretch;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px
}

button {
    padding: 15px;
    flex: 1;
    background-color: transparent;
    border-color: lightblue;
    border-width: 2px;
    border-style: solid;
    border-radius: 20px;
    color: white;
    font-size: x-large;
}

</style>
