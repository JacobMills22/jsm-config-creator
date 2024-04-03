<script setup lang="ts">
</script>

<template>
    <button>
        <slot/>
    </button>
</template>

<style scoped>
button {
    padding: 15px;
    background-color: transparent;
    border: 2px solid var(--border-colour);
    border-radius: 20px;
    color: var(--text-colour-light);
    font-size: x-large;
}

button:hover {
    background-color: var(--active-colour);
    color: var(--text-colour-dark);
}

</style>
