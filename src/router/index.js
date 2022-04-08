import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Login";

import Home from "../views/home/home";
import Report from "../views/home/report";
import HelpEcharts from "../views/home/echarts";
import RescueRank from "../views/home/rescueRank";

import Auth from "../views/auth/auth";
import AddAuth from "../views/auth/addAuth";
import ApplyAuth from "../views/auth/applyAuth";

import Product from "../views/product/product";
import Products from "../views/product/products";
import Contacts from "../views/product/contacts";

// import Message from "../views/message/message";
// import Messages from "../views/message/messages";
// import Inform from "../views/message/inform";

// import Materials from "../views/materials/materials";
// import MassMaterials from "../views/materials/massMaterials";
// import ApplyMaterials from "../views/materials/applyMaterials";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "/",
    redirect: "/login",
  },
  {
    name: "首页",
    path: "/home",
    component: Home,
    meta: {
      requireAuth: true,
      title: "首页",
    },
    children: [
      {
        name: "产品首页",
        path: "report",
        meta: {
          requireAuth: true,
          title: "产品首页",
        },
        component: Report,
      },
      {
        name: "可视化",
        path: "echarts",
        meta: {
          requireAuth: true,
          title: "可视化",
        },
        component: HelpEcharts,
      },
      {
        name: "一键管理",
        path: "recueRank",
        component: RescueRank,
        meta: {
          requireAuth: true,
          title: "一键管理",
        },
      },
    ],
  },
  {
    name: "业务信息",
    path: "/display",
    component: Product,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        name: "产品信息",
        path: "products",
        meta: {
          requireAuth: true,
        },
        component: Products,
      },
      {
        name: "联系人管理",
        path: "contacts",
        component: Contacts,
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    name: "业务创建",
    path: "/auth",
    component: Auth,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        name: "产品添加",
        path: "add-auth",
        meta: {
          requireAuth: true,
        },
        component: AddAuth,
      },
      {
        name: "用户申请权限管理",
        path: "apply-auth",
        component: ApplyAuth,
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  // {
  //   name: "物资管理子系统",
  //   path: "/materials",
  //   component: Materials,
  //   meta: {
  //     requireAuth: true,
  //   },
  //   children: [
  //     {
  //       name: "物资管理",
  //       path: "massMaterials",
  //       meta: {
  //         requireAuth: true,
  //       },
  //       component: MassMaterials,
  //     },
  //     {
  //       name: "物资申请管理",
  //       path: "applyMaterials",
  //       meta: {
  //         requireAuth: true,
  //       },
  //       component: ApplyMaterials,
  //     },
  //   ],
  // },
  // {
  //   name: "消息管理子系统",
  //   path: "/message",
  //   component: Message,
  //   meta: {
  //     requireAuth: true,
  //   },
  //   children: [
  //     {
  //       name: "通知管理",
  //       path: "inform",
  //       component: Inform,
  //       meta: {
  //         requireAuth: true,
  //       },
  //     },
  //     {
  //       name: "群众互助信息管理",
  //       path: "messages",
  //       meta: {
  //         requireAuth: true,
  //       },
  //       component: Messages,
  //     },
  //   ],
  // },
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
//
// router.afterEach((to, from, next) => {
//
// })

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// const VueRouterPush = VueRouter.prototype.push;

// VueRouter.prototype.push = function push(to) {
//   return VueRouterPush.call(this, to).catch((err) => err);
// };
