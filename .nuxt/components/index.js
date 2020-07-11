export { default as Calendar } from '../../components/Calendar.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MyButton } from '../../components/MyButton.vue'

export const LazyCalendar = import('../../components/Calendar.vue' /* webpackChunkName: "components/Calendar'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyMyButton = import('../../components/MyButton.vue' /* webpackChunkName: "components/MyButton'}" */).then(c => c.default || c)
