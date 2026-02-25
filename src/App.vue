<script setup>
// importações
import Menu from './components/menu.vue';
import SearchUser from './components/searchUser.vue';
import ListUsers from './components/listUsers.vue';
</script>

<template>
     <Menu />

     <div class="container">
          <SearchUser />

          <ListUsers />
     </div>
</template>

<style scoped></style>
