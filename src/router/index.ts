import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Home from '../views/Home.vue';
import CreateNote from '../views/notes/Create.vue';
import ViewNote from '../views/notes/View.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/note/create',
            component: CreateNote,
        },
        {
            path: '/note/:id',
            component: ViewNote,
        },
    ],
});


export default router;