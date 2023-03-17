/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides



export default createVuetify({
  theme: {
    defaultTheme: 'chorus',
    themes: {
      chorus: {
        dark: true,
        colors: {
          background: '#2C3E50',
          primary: '#DA9E0E'
        }
      }
    },
  },
})
