<script setup lang="ts">
import { useRoute } from 'vue-router';

const router = useRoute();

const id = router.params.id;
</script>

<template>
     <h1>Detalhes do Usuário: {{ id }}</h1>
</template>

<style scoped></style>
