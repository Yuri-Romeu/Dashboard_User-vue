<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { useUsersStore } from '@/stores/users.store';

const store = useUsersStore();

const handleSearchInput = (event: Event) => {
     const target = event.target as HTMLInputElement | null;
     store.setSearch(target?.value ?? '');
};

const handleGenderChange = (event: Event) => {
     const target = event.target as HTMLSelectElement | null;
     store.setGender(target?.value ?? 'all');
};
</script>

<template>
     <div class="containerSearchUser">
          <h1 class="title">List of Users</h1>

          <div class="searchUserContant">
               <Search
                    class="searchUserContantIcon"
                    :color="'rgba(128, 128, 128, 0.8)'"
                    :size="20"
               />
               <input
                    class="inputSearchUser"
                    type="text"
                    placeholder="Search users..."
                    @input="handleSearchInput"
               />
          </div>

          <div class="filter">
               <select @change="handleGenderChange">
                    <option value="all">All</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
               </select>
          </div>
     </div>
</template>

<style scoped>
.containerSearchUser {
     margin: 14px 0;
}

.searchUserContant {
     position: relative;
}

.searchUserContantIcon {
     position: absolute;
     top: 50%;
     left: 12px;
     transform: translateY(-50%);
     pointer-events: none;
}

.inputSearchUser {
     width: 40%;
     padding: 12px 16px 12px 42px;
     margin: 10px 0;
     border-radius: 4px;
     border: 1px solid var(--color-quinary);

     &::placeholder {
          color: rgba(128, 128, 128, 0.8);
     }
}

.filter {
     margin: 5px;
}

select {
     padding: 4px 7px;
     border-radius: 4px;
     border: 1px solid var(--color-quinary);
}
</style>
