// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    btn: 'p-2 sm:p-4 font-semibold rounded-lg shadow-md transition-colors',
    'btn-secondary':
      'text-cool-gray-50 dark:text-cool-gray-400 bg-cool-gray-400 dark:bg-blue-gray-700 hover:bg-cool-gray-500',
    'app-container': 'grid grid-rows-[auto_1fr] min-h-100vh',
    'router-link-active': '!text-primary-500',
  },
  theme: {
    colors: {
      submit: {
        DEFAULT: '#71c838',
        hover: '#a6dd83',
        active: '#477d23',
      },
      primary: {
        50: 'color-mix(in srgb, var(--color-primary-base) 5%, white)',
        100: 'color-mix(in srgb, var(--color-primary-base) 10%, white)',
        200: 'color-mix(in srgb, var(--color-primary-base) 30%, white)',
        300: 'color-mix(in srgb, var(--color-primary-base) 50%, white)',
        400: 'color-mix(in srgb, var(--color-primary-base) 70%, white)',
        500: 'var(--color-primary-base)',
        600: 'color-mix(in srgb, var(--color-primary-base), black 10%)',
        700: 'color-mix(in srgb, var(--color-primary-base), black 30%)',
        800: 'color-mix(in srgb, var(--color-primary-base), black 50%)',
        900: 'color-mix(in srgb, var(--color-primary-base), black 70%)',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Outfit',
          provider: 'bunny',
        },
        serif: {
          name: 'Volkhov',
          provider: 'bunny',
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
