// https://nuxt.com/docs/api/configuration/nuxt-config\
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/eslint'],
  css: [
    '~/assets/css/Home.css',
    '~/assets/css/Catalog.css',
    '~/assets/css/ProductDetails.css',
    '~/assets/css/Cart.css',
    '~/assets/css/ProductCard.css'
  ]
})