import { defineStore } from 'pinia';
import { fetchUsers } from '@/api/users.api';
import type { User } from '@/types/user';

export const useUsersStore = defineStore('users', {
     state: () => ({
          users: [] as User[],
          gender: 'all',
          loading: false,
          error: null as string | null,
          search: '',
     }),
     getters: {
          filteredUsers(state) {
               return state.users.filter(user => {
                    const matchesSearch =
                         user.name.first.toLowerCase().includes(state.search.toLowerCase()) ||
                         user.name.last.toLowerCase().includes(state.search.toLowerCase()) ||
                         user.email.toLowerCase().includes(state.search.toLowerCase());

                    const matchesGender = state.gender === 'all' || user.gender === state.gender;

                    return matchesSearch && matchesGender;
               });
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

          setGender(value: string) {
               this.gender = value;
          },
     },
});
