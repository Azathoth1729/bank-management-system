import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login"),
  },
  {
    path: "/",
    name: "/",
    redirect: "/login",
  },
  {
    name: "产品首页",
    path: "/home",
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/home/Home"),
  },
  {
    name: "产品详情",
    path: "/productshow/:id",
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/home/ProductShow"),
  },

  
  // product creation
  {
    name: "产品添加-第一步",
    path: "/create/create_product/1",
    props: (route) => ({ ...route.params }),
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/create/Step1"),
  },
  {
    name: "产品添加-第二步",
    path: "/create/create_product/2",
    props: (route) => ({ ...route.params }),
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/create/Step2"),
  },
  {
    name: "产品添加-第三步",
    path: "/create/create_product/3",
    props: (route) => ({ ...route.params }),
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/create/Step3"),
  },


  // productControl
  {
    name: "地区控制",
    path: "/product/area_control",
    component: () => import("../views/productControl/AreaControl"),
    meta: {
      requireAuth: true,
    },
  },

  {
    name: "身份认证",
    path: "/product/authentication",
    component: () => import("../views/productControl/Authentication"),
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "担保人控制",
    path: "/product/bondsman_control",
    component: () => import("../views/productControl/BondsManControl"),
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "违约控制",
    path: "/product/penalty_control",
    component: () => import("../views/productControl/PenaltyControl"),
    meta: {
      requireAuth: true,
    },
  },

  {
    name: "利率控制",
    path: "/product/rate_control",
    component: () => import("../views/productControl/RateControl"),
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "库存控制",
    path: "/product/stock_control",
    component: () => import("../views/productControl/StockControl"),
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "标签控制",
    path: "/product/tags_control",
    component: () => import("../views/productControl/TagsControl"),
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "黑名单控制",
    path: "/product/white_list",
    component: () => import("../views/productControl/WhiteList"),
    meta: {
      requireAuth: true,
    },
  },
  // summary page
  {
    name: "产品信息",
    path: "/product_info",
    component: () => import("../views/ProductList"),
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "操作记录",
    path: "/history",
    component: () => import("../views/History"),
    meta: {
      requireAuth: true,
    },
  },
  // notfound page
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {
//         let isLogin = sessionStorage.getItem("isLogin") || 0;
//         isLogin = Boolean(Number(isLogin));
//         if (isLogin === true) {
//             document.title = to.meta.title || '救援后台管理系统'
//             next();
//         } else {
//             document.title = '登录'
//             next({
//                 path: '/login',       //返回登录界面
//             })
//         }
//     } else {
//         next();
//     }
// })

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
