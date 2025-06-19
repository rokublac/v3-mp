// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            black: {
              50: '#000000',
              100: '#030303',
              200: '#060606',
              300: '#090909',
              400: '#0c0c0c',
              500: '#101010',
              600: '#131313',
              700: '#161616',
              800: '#191919',
              900: '#1c1c1c',
              950: '#101114',
            },
            accent: {
              primary: '#7c3aed',
              secondary: '#8b5cf6',
              success: '#22c55e',
              warning: '#f59e0b',
              danger: '#ef4444',
            },
            primary: {
              100: '#2072FF',
              200: '#0051DE',
            }
          }
        }
      }
    }
  }
})