export { default as Logo } from '../../components/Logo.vue'
export { default as MyButton } from '../../components/MyButton.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyMyButton = import('../../components/MyButton.vue' /* webpackChunkName: "components/MyButton'}" */).then(c => c.default || c)
