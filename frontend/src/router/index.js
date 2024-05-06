import { createRouter, createWebHistory } from 'vue-router'
import LoginLayout from '@/components/layouts/LoginLayout.vue'
import BlankLayout from '@/components/layouts/BlankLayout.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import HomeView from '@/views/Dashboard/HomeView.vue'
import PostView from '@/views/Dashboard/PostView.vue'
import SettingView from '@/views/Dashboard/SettingView.vue'
import CategoryView from '@/views/Dashboard/CategoryView.vue'
import NotificationView from '@/views/Dashboard/NotificationView.vue'
import UsersView from '@/views/Dashboard/UsersView.vue'
import IndexView from '@/views/Dashboard/IndexView.vue'
import NavbarLayoutVue from '@/components/layouts/NavbarLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     
      component: BlankLayout,
      children:[
        {
          path: '/login',
          name: 'login',
          component: LoginView,
        },
      ]
      
    },
    {
     
      component: DashboardLayout,
      children:[
        {
          path: '/dashboard',
          name: 'dashboard',
          component: HomeView,
        },
        {
          path: '/new-post',
          name: 'newpost',
          component: PostView,
        },
        {
          path: '/setting',
          name: 'setting',
          component: SettingView,
        },
        {
          path: '/notification',
          name: 'notification',
          component: NotificationView,
        },
        {
          path: '/category',
          name: 'category',
          component: CategoryView,
        },
        {
          path: '/users',
          name: 'user',
          component: UsersView,
        },
      ]
      
    },
    {
      component: NavbarLayoutVue,
      children: [
        {
          path: '/home',
          name: 'home',
          component: IndexView,
        }
      ]
    }

    

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
