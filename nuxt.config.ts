// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@prisma/nuxt"],

  tailwindcss: {
    exposeConfig: true,
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Roboto", "sans-serif"],
            title: ["Trade Gothic", "sans-serif"],
          },
        },
      },
      plugins: [require("tailwindcss-primeui")],
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".my-app-dark",
        },
      },
    },
  },

  css: ["primeicons/primeicons.css"],
});
