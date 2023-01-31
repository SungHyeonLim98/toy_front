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
    path: '/todos',
    children: [
      {
        path: 'list',
        name: "TodoListPage",
        component: () => import('@/views/TodoListPage.vue'),

      },

      {
        path: 'details/:id',
        name: "DetailsPage",
        component: () => import('@/views/TodoDetailsPage.vue'),

      },
      {
        path: 'modify/:id',
        name: "TodoModifyPage",
        component: () => import('@/views/TodoModifyPage.vue'),

      },
      {
        path: 'add',
        name: consts.TODO_ADD_PAGE,
        component: () => import('@/views/TodoAddPage.vue'),

      },
    ]
  },
  {
    path: '/login',
    name: "LoginPage",
    component: () => import('@/views/LoginPage.vue'),

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
