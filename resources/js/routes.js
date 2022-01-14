import VueRouter from "vue-router";
import Home from "./pages/Home";
import Login from './auth/Login';
import Register from './auth/Register';

const routes = [
    {
        path: '/home',
        component: Home,
        name: 'home'
    },
    {
        path: '/auth/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/auth/register',
        component: Register,
        name: 'register'
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;