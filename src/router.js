import Vue from "vue";
import Router from "vue-router";
import Home from "./components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  routes: [
    
    {
      path: "/",
      name: "home",
      component: Home,
      redirect:'/home1'
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta:{title:"首页"},
      children: [
        {
          path: '/About',
          name: 'About',
          meta:{title:"随记"},
           component: () =>
         import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
          path: '/home1',
          name: 'home1',
          meta:{title:"首页"},
           component: () =>
         import(/* webpackChunkName: "about" */ "./views/Home.vue")
        },
        {
          path: '/tag',
          name: 'tag',
          meta:{title:"标签"},
           component: () =>
         import(/* webpackChunkName: "about" */ "./views/tag.vue"),
         children:[
            {
              path: '/tag',
              name: 'tag',
              meta:{title:"vue"},
               component: () =>
             import(/* webpackChunkName: "about" */ "./views/tag.vue"),
            }
         ]
        }
      ]
    }
  ]
});
