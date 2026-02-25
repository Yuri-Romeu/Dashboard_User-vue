<script setup lang="ts">
import UserDetail from '@/components/userDetail.vue';
import { useRoute } from 'vue-router';

const router = useRoute();

const idUser = router.params.id;
</script>

<template>
     <h1 class="title">User Details</h1>
</template>

<style scoped></style>
