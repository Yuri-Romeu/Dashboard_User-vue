<script setup lang="ts">
import UserDetail from '@/components/userDetail.vue';
import { useRoute } from 'vue-router';
import { useUsersStore } from '@/stores/users.store';
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const store = useUsersStore();
const router = useRouter();
const route = useRoute();
const idUser = route.params.id;

const user = computed(() => store.users.find(user => user.login.uuid === idUser));

function backToUsers() {
     router.push('/');
}

onMounted(() => {
     if (!store.users.length) {
          store.loadUsers();
     }
});
</script>

<template>
     <h1 class="title">User Details</h1>

     <UserDetail
          :name="user.name.first + ' ' + user.name.last"
          :imagem="user.picture.large"
          :gender="user.gender"
          :country="user.location.country"
          :state="user.location.state"
          :street="user.location.street.name"
          :email="user.email"
          :phone="user.phone"
          :username="user.login.username"
          :password="user.login.password"
     />

     <button class="button" @click="backToUsers">Back</button>
</template>

<style scoped>
.button {
     padding: 12px 16px;
     background-color: var(--color-tertiary);
     color: var(--color-primary);
     font-family: var(--font-primary);
     font-size: 12px;
     border-radius: 4px;
     border: none;
     font-weight: 600;
     cursor: pointer;
     max-width: 720px;
}

@media (max-width: 480px) {
     .button {
          width: 100%;
     }
}
</style>
