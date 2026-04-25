import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ─── THEME CONFIGURATION ─────────────────────────────────────────────────────
// All brand colors are defined here. Edit these to retheme the entire site.
const BRAND = {
  primary:    '#0F172A', // Near-black slate — main brand color
  secondary:  '#64748B', // Slate grey — supporting text & elements
  accent:     '#F59E0B', // Amber gold — CTAs, highlights, buttons
  error:      '#DC2626',
  success:    '#16A34A',
  background: '#FAFAFA',
  surface:    '#FFFFFF',
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'mesTheme',
    themes: {
      mesTheme: {
        dark: false,
        colors: {
          primary:    BRAND.primary,
          secondary:  BRAND.secondary,
          accent:     BRAND.accent,
          error:      BRAND.error,
          success:    BRAND.success,
          background: BRAND.background,
          surface:    BRAND.surface,
        },
      },
    },
  },
  defaults: {
    VBtn: {
      style: 'text-transform: none; letter-spacing: 0;',
    },
  },
})
