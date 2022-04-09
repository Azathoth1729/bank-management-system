import VueRouter from "vue-router";

import Navigation from "../components/Navigation";

import Login from "../views/login/Login";
import Home from "../views/home/Home";
import ProductShow from "../views/home/ProductShow";

import CreateProduct from "../views/create/CreateProduct";
import History from "../views/create/History";

import ProductList from "../views/product/ProductList";
import AreaControl from "../views/product/AreaControl";
import WhiteList from "../views/product/WhiteList";
import StockControl from "../views/product/StockControl";
import RateControl from "../views/product/RateControl";
import Authentication from "../views/product/Authentication";
import ProductTags from "../views/product/ProductTags";
import PenaltyControl from "../views/product/PenaltyControl";
import BondsManControl from "../views/product/BondsManControl";

let router = new VueRouter({
  mode: "history",
  routes: [
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
      component: Navigation,
      meta: {
        requireAuth: true,
        title: "首页",
      },
      children: [
        {
          name: "产品首页",
          path: "products",
          meta: {
            requireAuth: true,
            title: "产品首页",
          },
          component: Home,
        },
        {
          name: "产品详情",
          path: "productshow",
          meta: {
            requireAuth: true,
            title: "产品详情",
          },
          component: ProductShow,
        },
      ],
    },
    {
      name: "创建业务",
      path: "/create",
      component: Navigation,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          name: "产品添加",
          path: "create_product",
          meta: {
            requireAuth: true,
          },
          component: CreateProduct,
        },
        {
          name: "操作记录",
          path: "history",
          component: History,
          meta: {
            requireAuth: true,
          },
        },
      ],
    },
    {
      name: "业务信息",
      path: "/product",
      component: Navigation,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          name: "产品信息",
          path: "product_info",
          meta: {
            requireAuth: true,
          },
          component: ProductList,
        },
        {
          name: "地区控制",
          path: "areaControl",
          component: AreaControl,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "白名单信息",
          path: "whitelist",
          component: WhiteList,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "库存控制",
          path: "stock_control",
          component: StockControl,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "利率控制",
          path: "rate_control",
          component: RateControl,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "信息认证",
          path: "authentication",
          component: Authentication,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "产品标签",
          path: "product_tags",
          component: ProductTags,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "违约控制",
          path: "penaltyControl",
          component: PenaltyControl,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "担保人设置",
          path: "bondsmancontrol",
          component: BondsManControl,
          meta: {
            requireAuth: true,
          },
        },
      ],
    },
  ],
});

export default router;

const VueRouterPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
