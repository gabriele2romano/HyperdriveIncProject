// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@bootstrap-vue-next/nuxt', //bootstrap vue for nuxt3
    '@nuxtjs/supabase', //supabase for nuxt3
    '@nuxt/image', //nux.img for nuxt3
    '@nuxtjs/device', //detect which device is used
  ],
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
  alias: {
    assets: "/<rootDir>/assets", //for enablig the fetch of assets with @/css
  },
  supabase: {
    // Options
  },
  image: {
    //dir: 'assets/img' //enabling fetch for nuxt-img in assets/img -------- VERCEL DO NOT SUPPORT IT
  },
  devtools: { enabled: false },
  ssr: true
});


