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
            primary: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
              950: '#020617',
            },
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
            }
          }
        }
      }
    }
  }
})