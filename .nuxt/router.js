import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _177c490a = () => interopDefault(import('..\\pages\\adopta\\index.vue' /* webpackChunkName: "pages/adopta/index" */))
const _1318c7e4 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _81d73c58 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _398eebbb = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _45a9617e = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _3012feba = () => interopDefault(import('..\\pages\\adopta\\_id.vue' /* webpackChunkName: "pages/adopta/_id" */))
const _284a4c4c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adopta",
    component: _177c490a,
    name: "adopta"
  }, {
    path: "/dashboard",
    component: _1318c7e4,
    name: "dashboard"
  }, {
    path: "/inspire",
    component: _81d73c58,
    name: "inspire"
  }, {
    path: "/auth/login",
    component: _398eebbb,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _45a9617e,
    name: "auth-register"
  }, {
    path: "/adopta/:id",
    component: _3012feba,
    name: "adopta-id"
  }, {
    path: "/",
    component: _284a4c4c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
