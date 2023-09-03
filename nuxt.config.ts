// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  // modules: [
  //   '@vueuse/nuxt',
  // ],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  // build: {
  //   transpile: ['gsap'],
  // },
  // css: [
  //   join(currentDir, './assets/css/tailwind.css')
  // ],
})
