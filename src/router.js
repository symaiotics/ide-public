import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Gallery from './pages/Gallery.vue'
import Explore from './pages/Explore.vue'
import MyEcosystem from './pages/MyEcosystem.vue'
import Press from './pages/Press.vue'
// import Contact from './pages/Contact.vue'

import PageNotFound from './pages/PageNotFound.vue'


//Extras
// import Testimonials from './pages/Testimonials.vue'
// import Blog from './pages/Blog.vue'
// import BlogPost from './pages/BlogPost.vue'

// import Gallery from './pages/Gallery.vue'
// import Help from './pages/Help.vue'
// import About from './pages/About.vue'


const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/gallery',
      component: Gallery
    },
    {
      path: '/explore',
      component: Explore
    },
    {
      path: '/myecosystem',
      component: MyEcosystem
    },    
    {
      path: '/press',
      component: Press
    },
    // {
    //   path: '/contact',
    //   component: Contact
    // },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

export default router
