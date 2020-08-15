import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d7d1d39 = () => interopDefault(import('..\\pages\\adopta\\index.vue' /* webpackChunkName: "pages/adopta/index" */))
const _e1496bdc = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3f8b84f9 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _e94f757a = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _2419cc3e = () => interopDefault(import('..\\pages\\adopta\\_id.vue' /* webpackChunkName: "pages/adopta/_id" */))
const _290a2c0a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6d7d1d39,
    name: "adopta"
  }, {
    path: "/inspire",
    component: _e1496bdc,
    name: "inspire"
  }, {
    path: "/auth/login",
    component: _3f8b84f9,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _e94f757a,
    name: "auth-register"
  }, {
    path: "/adopta/:id",
    component: _2419cc3e,
    name: "adopta-id"
  }, {
    path: "/",
    component: _290a2c0a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
