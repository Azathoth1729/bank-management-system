import VueRouter from 'vue-router'
import Login from '../views/login/Login'

import Home from '../views/home/home'
import report from '../views/dashboard/dashboard.vue'
import HelpEcharts from '../views/home/charts/echarts'
import RescueRank from '../views/home/rescueRank/rescueRank'

import Auth from '../views/auth/auth'
import UserAuth from '../views/auth/userAuth'
import ApplyAuth from '../views/auth/applyAuth'

import Materials from '../views/materials/materials'
import MassMaterials from '../views/materials/massMaterials'
import ApplyMaterials from '../views/materials/applyMaterials'

import Users from '../views/user/users'
import User from '../views/user/user'
import Contacts from '../views/user/contacts'

import Message from '../views/message/message'
import Messages from '../views/message/messages'
import Inform from '../views/message/inform'

let router =  new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/login',
            name: 'login',
            component: Login,
        },{
            path: '/',
            name: '/',
            redirect: '/login',
        },{
            name: '首页',
            path: '/home',
            component: Home,
            meta: {
                requireAuth: true,
                title: '首页'
            },
            children:[
                {
                    name: '救援首页',
                    path: 'report',
                    meta: {
                        requireAuth: true,
                        title: '救援首页'
                    },
                    component: report
                },
                {
                    name: '救援可视化',
                    path: 'echarts',
                    meta: {
                        requireAuth: true,
                        title: '救援可视化'
                    },
                    component: HelpEcharts
                },
                {
                    name: '一键救援管理',
                    path: 'recueRank',
                    component: RescueRank,
                    meta: {
                        requireAuth: true,
                        title: '一键救援管理'
                    }
                }
            ]
        },{
            name: '业务信息',
            path: '/users',
            component: Users,
            meta: {
                requireAuth: true
            },
            children:[
                {
                    name: '产品信息',
                    path: 'user',
                    meta: {
                        requireAuth: true
                    },
                    component: User
                },{
                    name: '联系人管理',
                    path: 'contacts',
                    component: Contacts,
                    meta: {
                        requireAuth: true
                    }
                }
            ]
        },{
            name: '业务创建',
            path: '/auth',
            component: Auth,
            meta: {
                requireAuth: true
            },
            children:[
                {
                    name: '产品添加',
                    path: 'auth',
                    meta: {
                        requireAuth: true
                    },
                    component: UserAuth
                },{
                    name: '用户申请权限管理',
                    path: 'applyAuth',
                    component: ApplyAuth,
                    meta: {
                        requireAuth: true
                    }
                }
            ]
        },
        {
            name: '物资管理子系统',
            path: '/materials',
            component: Materials,
            meta: {
                requireAuth: true
            },
            children:[
                {
                    name: '物资管理',
                    path: 'massMaterials',
                    meta: {
                        requireAuth: true
                    },
                    component:MassMaterials
                },
                {
                    name: '物资申请管理',
                    path: 'applyMaterials',
                    meta: {
                        requireAuth: true
                    },
                    component: ApplyMaterials
                }
            ]
        },{
            name: '消息管理子系统',
            path: '/message',
            component: Message,
            meta: {
                requireAuth: true
            },
            children:[
                {
                    name: '通知管理',
                    path: 'inform',
                    component:Inform,
                    meta: {
                        requireAuth: true
                    },
                }, {
                    name: '群众互助信息管理',
                    path: 'messages',
                    meta: {
                        requireAuth: true
                    },
                    component:Messages
                }
            ]
        }
    ]
})

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

export default router

const VueRouterPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (to) {

    return VueRouterPush.call(this, to).catch(err => err)

}