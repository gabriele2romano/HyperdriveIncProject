// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

//main theme used in the whole website
const customLightTheme = {
    dark: false,
    colors: {
        dark: '#000000',
        light: '#f1f6f9',
        'dark-blue': '#394867',
        'darker-blue': '#212a3e',
        'mega-grey': '#9ba4b5',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'customLightTheme',
            themes: {
              customLightTheme,
            },
          },
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
                mdi,
            },
        },
    })
    nuxtApp.vueApp.use(vuetify)
})