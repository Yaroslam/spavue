import VueRouter from 'vue-router';
import Vue from 'vue'
import ArticleList from '../views/ArticleList';
import HelloPage from '@/views/HelloPage.vue';
import Article from "@/views/Article.vue";
import Gallery from "@/views/Gallery.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HelloPage',
        component: HelloPage,
    },
    {
        path: '/articles',
        name: 'ArticleList',
        component: ArticleList,
    },
    {
        path: '/articles/:id',
        name: 'ArticleDetails',
        component: Article,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,

    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
