import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useUsersStore } from '@/stores/users.store';
import { fetchUsers } from '@/api/users.api';
import type { User } from '@/types/user';

vi.mock('@/api/users.api', () => ({
     fetchUsers: vi.fn(),
}));

const mockUsers: User[] = [
     {
          gender: 'male',
          login: { uuid: '1', username: 'joao', password: '123' },
          name: { title: 'Mr', first: 'Joao', last: 'Silva' },
          picture: { large: 'joao.jpg' },
          location: {
               street: { number: 123, name: 'Rua A' },
               city: 'Rio de Janeiro',
               state: 'RJ',
               country: 'Brasil',
          },
          phone: '21999999999',
          email: 'joao@gmail.com',
     },
     {
          gender: 'female',
          login: { uuid: '2', username: 'maria', password: '456' },
          name: { title: 'Ms', first: 'Maria', last: 'Souza' },
          picture: { large: 'maria.jpg' },
          location: {
               street: { number: 456, name: 'Rua B' },
               city: 'Sao Paulo',
               state: 'SP',
               country: 'Brasil',
          },
          phone: '11999999999',
          email: 'maria@gmail.com',
     },
];

describe('users.store', () => {
     beforeEach(() => {
          setActivePinia(createPinia());
          vi.clearAllMocks();
     });

     it('Deve iniciar com estado padrao', () => {
          const store = useUsersStore();

          expect(store.users).toEqual([]);
          expect(store.gender).toBe('all');
          expect(store.loading).toBe(false);
          expect(store.error).toBeNull();
          expect(store.search).toBe('');
     });

     it('Deve filtrar por texto de busca', () => {
          const store = useUsersStore();
          store.users = mockUsers;
          store.setSearch('joao');

          expect(store.filteredUsers).toHaveLength(1);
          expect(store.filteredUsers[0].name.first).toBe('Joao');
     });

     it('Deve filtrar por genero', () => {
          const store = useUsersStore();
          store.users = mockUsers;
          store.setGender('female');

          expect(store.filteredUsers).toHaveLength(1);
          expect(store.filteredUsers[0].gender).toBe('female');
     });

     it('Deve combinar filtro de busca com genero', () => {
          const store = useUsersStore();
          store.users = mockUsers;
          store.setSearch('souza');
          store.setGender('female');

          expect(store.filteredUsers).toHaveLength(1);
          expect(store.filteredUsers[0].name.last).toBe('Souza');
     });

     it('Deve carregar usuarios com sucesso', async () => {
          const store = useUsersStore();
          vi.mocked(fetchUsers).mockResolvedValue(mockUsers);

          await store.loadUsers();

          expect(fetchUsers).toHaveBeenCalledTimes(1);
          expect(store.users).toEqual(mockUsers);
          expect(store.error).toBeNull();
          expect(store.loading).toBe(false);
     });

     it('Deve setar erro quando loadUsers falhar', async () => {
          const store = useUsersStore();
          vi.mocked(fetchUsers).mockRejectedValue(new Error('Falha na API'));

          await store.loadUsers();

          expect(store.users).toEqual([]);
          expect(store.error).toBe('Erro ao carregar usuários');
          expect(store.loading).toBe(false);
     });

     it('Deve atualizar search com setSearch', () => {
          const store = useUsersStore();

          store.setSearch('maria');

          expect(store.search).toBe('maria');
     });

     it('Deve atualizar gender com setGender', () => {
          const store = useUsersStore();

          store.setGender('male');

          expect(store.gender).toBe('male');
     });
});
