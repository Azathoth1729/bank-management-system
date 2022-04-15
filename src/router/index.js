import { createRouter, createWebHistory } from "vue-router";

import AreaControl from "../views/productControl/AreaControl";
import WhiteList from "../views/productControl/WhiteList";
import StockControl from "../views/productControl/StockControl";
import RateControl from "../views/productControl/RateControl";
import Authentication from "../views/productControl/Authentication";
import ProductTags from "../views/productControl/ProductTags";
import PenaltyControl from "../views/productControl/PenaltyControl";
import BondsManControl from "../views/productControl/BondsManControl";

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
    name: "productshow",
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
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/create/Step1"),
  },

  {
    name: "产品添加-第二步",
    path: "/create/create_product/2",
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/create/Step2"),
  },

  {
    name: "产品添加-第三步",
    path: "/create/create_product/3",
    meta: {
      requireAuth: true,
    },
    component: () => import("../views/create/Step3"),
  },

  // productControl
  {
    name: "地区控制",
    path: "/product/area_control",
    component: AreaControl,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "白名单信息",
    path: "/produc/white_list",
    component: WhiteList,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "库存控制",
    path: "/product/stock_control",
    component: StockControl,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "利率控制",
    path: "/produc/rate_control",
    component: RateControl,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "信息认证",
    path: "/produc/authentication",
    component: Authentication,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "产品标签",
    path: "/produc/produc_tags",
    component: ProductTags,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "违约控制",
    path: "/produc/penalty_control",
    component: PenaltyControl,
    meta: {
      requireAuth: true,
    },
  },
  {
    name: "担保人设置",
    path: "/produc/bondsman_control",
    component: BondsManControl,
    meta: {
      requireAuth: true,
    },
  },
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
