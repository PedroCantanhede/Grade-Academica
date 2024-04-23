import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home
    },
    {
        path: '/grade-academica',
        name: 'GradeAcademicaPage',
        component: () => import(/* webpackChunkName: "grade-academica/GradeAcademica.vue" */ '../views/grade-academica/GradeAcademica.vue')
    },
    {
        path: '/optativas',
        name: 'OptativasPage',
        component: () => import(/* webpackChunkName: "grade-academica/GradeAcademica.vue" */ '../views/optativas/Optativas.vue')
    },
    {
        path: '/admin',
        name: 'AdminPage',
        component: () => import(/* webpackChunkName: "grade-academica/GradeAcademica.vue" */ '../views/admin/Admin.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import(/* webpackChunkName: "login/Login.vue" */ '../views/login/Login.vue')
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: () => import(/* webpackChunkName: "login/Login.vue" */ '../views/register/Register.vue')
    },
];

const router = Router();

export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes
    });
    return router;
}
