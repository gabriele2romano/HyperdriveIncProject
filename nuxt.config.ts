// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-vue-next/dist/bootstrap-vue-next.css"], // add
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});