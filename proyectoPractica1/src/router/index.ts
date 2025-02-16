import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import PostCard from '@/views/PostCardView.vue'
import UserApisId_OptionsAPI from '@/components/UserApisId_OptionsAPI.vue'
import UsersApis_OptionsAPI from '@/views/UsersApis_OptionsAPIView.vue'
import UsersApis_CompositionAPI from '@/views/UsersApis_CompositionAPIView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/CounterCompositions',
    name: 'CounterCompositions',
    component: () => import('@/views/CounterCompositionsView.vue'),
  },
  {
    path: '/CounterOption',
    name: 'CounterOption',
    component: () => import('@/views/CounterOptionView.vue'),
  },
  {
    path: '/ListTeachers',
    name: 'ListTeachers',
    component: () => import('@/views/ListTeachersView.vue'),
  },

  { path: '/PostCard', name: 'PostCard', component: PostCard },
  {
    path: '/UsersApis_CompositionAPI',
    name: 'UsersApis_CompositionAPI',
    component: UsersApis_CompositionAPI,
  },
  {
    path: '/UserApisId_CompositionAPI/:id',
    name: 'UserApisId_CompositionAPI',
    component: () => import('../components/UserApisId_CompositionAPI.vue'),
    props: true,
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
