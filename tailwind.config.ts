import type { Config } from 'tailwindcss';

/**
 * Palette ufficiale del sito Step by Step (fonte: style.css originale).
 * Le stesse voci sono esposte come variabili CSS in app/globals.css,
 * così il CSS portato dall'originale e i file in data/ usano un'unica fonte.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  corePlugins: {
    // Il reset dell'originale (* { margin:0; padding:0; box-sizing:border-box })
    // è portato in globals.css: disattivando il preflight il rendering dei
    // titoli e delle liste resta identico al sito statico.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        blu: '#494495',
        magenta: {
          DEFAULT: '#D03460',
          scuro: '#8d3252fa',
        },
        verde: '#86BC25',
        giallo: '#F4C123',
        turchese: '#4DB6AC',
        arancio: '#FF5F00',
        'bs-lilla': {
          DEFAULT: '#8F8CBF',
          chiaro: '#A3A1C2',
        },
        'bs-grigio': '#666666',
        chiaro: '#FDF7F9',
      },
      fontFamily: {
        poppins: [
          'var(--font-poppins)',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
