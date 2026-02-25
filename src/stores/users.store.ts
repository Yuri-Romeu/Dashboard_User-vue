import { defineStore } from 'pinia';
import { fetchUsers } from '@/api/users.api';
import type { User } from '@/types/user';

export const useUsersStore = defineStore('users', {
     state: () => ({
          users: [] as User[],
          loading: false,
          error: null as string | null,
          search: '',
     }),
     getters: {
          filteredUsers(state) {
               return state.users.filter(user =>
                    user.name.first.toLowerCase().includes(state.search.toLowerCase()),
               );
          },
     },

     actions: {
          async loadUsers() {
               this.loading = true;
               this.error = null;

               try {
                    this.users = await fetchUsers();
               } catch (err) {
                    this.error = 'Erro ao carregar usuários';
               } finally {
                    this.loading = false;
               }
          },

          setSearch(value: string) {
               this.search = value;
          },
     },
});
