// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/HomePage.vue";
import consts from "@/consts/consts";

const routes = [
  {
    path: '/',
    name: "HomePage",
    component: () => import('@/views/HomePage.vue'),

  },
  {
    path: '/todos/list',
    name: "TodoListPage",
    component: () => import('@/views/TodoListPage.vue'),

  },
  {
    path: '/login',
    name: "LoginPage",
    component: () => import('@/views/LoginPage.vue'),

  },
  {
    path: '/todos/details/:id',
    name: "DetailsPage",
    component: () => import('@/views/TodoDetailsPage.vue'),

  },
  {
    path: '/todos/modify/:id',
    name: "TodoModifyPage",
    component: () => import('@/views/TodoModifyPage.vue'),

  },
  {
    path: '/todos/add',
    name: consts.TODO_ADD_PAGE,
    component: () => import('@/views/TodoAddPage.vue'),

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
