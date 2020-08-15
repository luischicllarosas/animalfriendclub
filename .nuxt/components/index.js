export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as Overlay } from '../..\\components\\overlay.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as Card } from '../..\\components\\adopcion\\card.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\navbar.vue' /* webpackChunkName: "components_navbar'}" */).then(c => c.default || c)
export const LazyOverlay = import('../..\\components\\overlay.vue' /* webpackChunkName: "components_overlay'}" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo'}" */).then(c => c.default || c)
export const LazyCard = import('../..\\components\\adopcion\\card.vue' /* webpackChunkName: "components_adopcion/card'}" */).then(c => c.default || c)
