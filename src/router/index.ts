import { createRouter, createWebHistory } from 'vue-router';
import UsersView from '@/view/UsersView.vue';
import UserDetailsView from '@/view/UserDetailsView.vue';

const routes = [
     { path: '/', component: UsersView },
     { path: '/users/:id', component: UserDetailsView },
];

export default createRouter({
     history: createWebHistory(),
     routes,
});
