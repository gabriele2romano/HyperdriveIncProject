// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt','@nuxtjs/supabase'],
  bootstrapVueNext: {
    composables: true, // Will include all composables
    // composables: {useBreadcrumb: true, useColorMode: true, all: false}, // Will include only useBreadcrumb & useColorMode
    // composables: {useBreadcrumb: false, useColorMode: false, all: true} // Will include everything except useBreadcrumb & useColorMode
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  /* supabase: {
    // Options
  }, */
  devtools: { enabled: true },
  ssr: true
});


