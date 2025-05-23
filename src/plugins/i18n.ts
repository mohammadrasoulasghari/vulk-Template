import { definePlugin } from '/@src/app'
import { createI18n } from 'vue-i18n'
/**
 * messages are generated using vite-plugin-i18n
 * each .json files located in the ./src/locales are registered in messages
 * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
import en from '/@src/locales/en.json'
import fr from '/@src/locales/fr.json'
import fa from '/@src/locales/fa.json'

// @ts-ignore
globalThis.__VUE_PROD_DEVTOOLS__ = false

export default definePlugin(({ app }) => {
  const i18n = createI18n({
    locale: 'fa',
    messages: {
      en,
      fr,
      fa,
    },
  })

  app.use(i18n)
})
