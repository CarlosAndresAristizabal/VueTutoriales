import { createRouter, createWebHistory } from 'vue-router'
import PostCard from '@/views/PostCard.vue'
import UserApisId_OptionsAPI from '@/views/UserApisId_OptionsAPI.vue'
import UsersApis_OptionsAPI from '@/views/UsersApis_OptionsAPI.vue'
import UsersApis_CompositionAPI from '@/views/UsersApis_CompositionAPI.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/CounterCompositions',
      name: 'CounterCompositions',
      component: () => import('@/views/CounterCompositions.vue'),
    },
    {
      path: '/CounterOption',
      name: 'CounterOption',
      component: () => import('@/views/CounterOption.vue'),
    },
    {
      path: '/ListTeachers',
      name: 'ListTeachers',
      component: () => import('@/views/ListTeachers.vue'),
    },

    { path: '/PostCard', name: 'PostCard', component: PostCard },
    {
      path: '/UsersApis_CompositionAPI',
      name: 'UsersApis_CompositionAPI',
      component: UsersApis_CompositionAPI,
    },
    {
      path     : '/UserApisId_CompositionAPI/:id',
      name     : 'UserApisId_CompositionAPI',
      component: () => import('../views/UserApisId_CompositionAPI.vue'),
      props    : true,
    },
    {
      path: '/UsersApis_OptionsAPI',
      name: 'UsersApis_OptionsAPI',
      component: UsersApis_OptionsAPI,
    },
    {
      path: '/UserApisId_OptionsAPI/:id',
      name: 'UserApisId_OptionsAPI',
      component: UserApisId_OptionsAPI,
      props: true,
    },
  ],
})

export default router
