import VueRouter from 'vue-router';
import Vue from 'vue'
import RickAndMortyList from '../views/RickAndMortyList';
import RickAndMortyCharacter from '../views/RickAndMortyCharacter';
import HelloPage from '@/views/HelloPage.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HelloPage',
        component: HelloPage,
    },
    {
        path: '/articles',
        name: 'RickAndMortyList',
        component: RickAndMortyList,
    },
    {
        path: '/articles/:id',
        name: 'CharacterDetails',
        component: RickAndMortyCharacter,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
