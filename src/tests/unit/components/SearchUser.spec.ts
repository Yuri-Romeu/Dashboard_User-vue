import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import SearchUser from '@/components/searchUser.vue';
import { useUsersStore } from '@/stores/users.store';

function mountComponent() {
     const wrapper = mount(SearchUser, {
          global: {
               plugins: [createTestingPinia()],
          },
     });

     const store = useUsersStore();

     return { wrapper, store };
}

describe('SearchUser', () => {
     it('Deve renderizar titulo e campos de busca', () => {
          const { wrapper } = mountComponent();

          expect(wrapper.text()).toContain('List of Users');
          expect(wrapper.find('input.inputSearchUser').exists()).toBe(true);
          expect(wrapper.find('select').exists()).toBe(true);
     });

     it('Deve chamar setSearch ao digitar no input', async () => {
          const { wrapper, store } = mountComponent();

          const input = wrapper.find('input.inputSearchUser');
          await input.setValue('joao');

          expect(store.setSearch).toHaveBeenCalledWith('joao');
     });

     it('Deve chamar setGender ao alterar o select', async () => {
          const { wrapper, store } = mountComponent();

          const select = wrapper.find('select');
          await select.setValue('female');

          expect(store.setGender).toHaveBeenCalledWith('female');
     });

     it('Deve renderizar opcoes de genero esperadas', () => {
          const { wrapper } = mountComponent();

          const options = wrapper.findAll('option').map(option => option.text());

          expect(options).toEqual(['All', 'Female', 'Male']);
     });
});
