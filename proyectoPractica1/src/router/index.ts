import { createRouter, createWebHistory } from 'vue-router'
import PostCard from '@/views/PostCard.vue'
import UserApisId from '@/views/UserApisId.vue'
import UsersApis from '@/views/UsersApis.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    {
      path     : '/about',
      name     : 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path     : '/CounterCompositions',
      name     : 'CounterCompositions',
      component: () => import('@/views/CounterCompositions.vue'),
    },
    {
      path     : '/CounterOption',
      name     : 'CounterOption',
      component: () => import('@/views/CounterOption.vue'),
    },
    {
      path     : '/ListTeachers',
      name     : 'ListTeachers',
      component: () => import('@/views/ListTeachers.vue'),
    },
    { path: '/PostCard', name: 'PostCard', component: PostCard },
    {
      path     : '/UsersAPIS',
      name     : 'UsersAPIS',
      component: UsersApis,
    },
    {
      path     : '/UserApisId/:id',
      name     : 'UserApisId',
      component: UserApisId,
      props    : true,
    },
  ],
})

export default router
