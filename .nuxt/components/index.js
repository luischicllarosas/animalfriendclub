export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as Newpost } from '../..\\components\\newpost.vue'
export { default as Post } from '../..\\components\\post.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as Card } from '../..\\components\\adopcion\\card.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\navbar.vue' /* webpackChunkName: "components_navbar'}" */).then(c => c.default || c)
export const LazyNewpost = import('../..\\components\\newpost.vue' /* webpackChunkName: "components_newpost'}" */).then(c => c.default || c)
export const LazyPost = import('../..\\components\\post.vue' /* webpackChunkName: "components_post'}" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo'}" */).then(c => c.default || c)
export const LazyCard = import('../..\\components\\adopcion\\card.vue' /* webpackChunkName: "components_adopcion/card'}" */).then(c => c.default || c)
