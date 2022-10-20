import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'ChorusDarkTheme',
    themes: {
      ChorusDarkTheme: {
        dark: true,
        colors: {
          background: '#2C3E50',
          surface: '#FFFFFF',
          primary: '#FFB300',
          secondary: '#03DAC6',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          banner: '#2980B9',
          navigation: '#34495E'
        }
      }
    }
  }
})
