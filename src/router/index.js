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
        component: () => import(/* webpackChunkName: "optativas/Optativas.vue" */ '../views/optativas/Optativas.vue')
    },
    {
        path: '/admin/professor',
        name: 'ProfessorPage',
        component: () => import(/* webpackChunkName: "admin/professor/Professor.vue" */ '../views/admin/professor/Professor.vue')
    },
    {
        path: '/admin/disciplina',
        name: 'DisciplinaPage',
        component: () => import(/* webpackChunkName: "admin/disciplina/Disciplina.vue" */ '../views/admin/disciplina/Disciplina.vue')
    },
    {
        path: '/admin/grade',
        name: 'GradePage',
        component: () => import(/* webpackChunkName: "admin/grade/Grade.vue" */ '../views/admin/grade/Grade.vue')
    },
    {
        path: '/admin/sala',
        name: 'SalaPage',
        component: () => import(/* webpackChunkName: "admin/sala/Sala.vue" */ '../views/admin/sala/Sala.vue')
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
