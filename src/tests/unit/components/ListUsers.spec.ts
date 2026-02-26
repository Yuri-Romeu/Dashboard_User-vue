import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { nextTick } from 'vue';
import ListUsers from '@/components/listUsers.vue';
import { useUsersStore } from '@/stores/users.store';
import type { User } from '@/types/user';

const push = vi.fn();

vi.mock('vue-router', () => ({
     useRouter: () => ({ push }),
}));

const mockUsers: User[] = [
     {
          gender: 'male',
          login: { uuid: '1', username: 'joao', password: '123' },
          name: { title: 'Mr', first: 'Joao', last: 'Feijao' },
          picture: { large: 'joao.jpg' },
          location: {
               street: { number: 123, name: 'Rua A' },
               city: 'rio de janeiro',
               state: 'rj',
               country: 'Brasil',
          },
          phone: '21999999999',
          email: 'joao@gmail.com',
     },
];

function mountComponent() {
     return mount(ListUsers, {
          global: {
               plugins: [createTestingPinia({ stubActions: true })],
          },
     });
}

describe('ListUsers', () => {
     beforeEach(() => {
          push.mockReset();
     });

     it('Deve renderizar usuarios', async () => {
          const wrapper = mountComponent();
          const store = useUsersStore();

          store.users = mockUsers;
          await nextTick();

          expect(wrapper.text()).toContain('Joao Feijao');
     });

     it('Deve mostrar spinner quando loading', async () => {
          const wrapper = mountComponent();
          const store = useUsersStore();

          store.loading = true;
          await nextTick();

          expect(wrapper.find('.spinner').exists()).toBe(true);
     });

     it('Nao deve renderizar itens quando nao ha usuarios', async () => {
          const wrapper = mountComponent();
          const store = useUsersStore();

          store.users = [];
          await nextTick();

          expect(wrapper.findAll('.Users')).toHaveLength(0);
     });

     it('Deve filtrar usuario', async () => {
          const wrapper = mountComponent();
          const store = useUsersStore();

          store.users = mockUsers;
          store.search = 'joao';
          await nextTick();

          expect(wrapper.text()).toContain('Joao Feijao');
     });

     it('Deve chamar o router quando clicar em ver detalhes', async () => {
          const wrapper = mountComponent();
          const store = useUsersStore();

          store.users = mockUsers;
          await nextTick();

          await wrapper.find('button').trigger('click');

          expect(push).toHaveBeenCalledWith('/users/1');
     });
});
