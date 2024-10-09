// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://api:4000/graphql',
      }
    },
  },
});