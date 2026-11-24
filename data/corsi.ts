/**
 * Corsi della scuola. Ogni card ha il proprio colore indipendente
 * (campo `colore` per il titolo, `coloreBordo` per il bordo superiore).
 * I colori puntano alle variabili del tema definite in app/globals.css
 * (palette in tailwind.config.ts): cambiando il colore qui cambia solo
 * quella card, non le altre.
 */

export type ParteOrario = { testo: string; barrato?: boolean };

export type Corso = {
  /** identificatore usato dai link degli orari (data-corso) */
  id: string;
  /** id dell'elemento card, usato dagli ancoraggi (#corso-...) */
  cardId: string;
  nome: string;
  sottotitolo: string;
  /** colore del titolo del corso */
  colore: string;
  /** colore del bordo superiore della card */
  coloreBordo: string;
  /** classi aggiuntive della card (varianti grafiche) */
  classi?: string[];
  logo?: { src: string; alt: string };
  badge?: { testo: string; variante: 'novita' | 'in-arrivo' };
  /** titolo spezzato con colori diversi (usato da Balla&Snella) */
  titoloSpezzato?: { testo: string; colore: string }[];
  paragrafi?: string[];
  livelli?: { titolo: string; testo: string }[];
  maestra?: string;
  locandina?: { src: string; alt: string };
  /** true quando la card prevede il riquadro locandina ma senza immagine */
  locandinaVuota?: boolean;
  orariTitolo?: string;
  orari?: ParteOrario[][];
  frequenza?: string;
  whatsapp: string;
};

export const corsiPrincipali: Corso[] = [
  {
    id: 'divas-dance',
    cardId: 'corso-divas-dance',
    nome: "Diva's Dance",
    sottotitolo: 'La tua essenza, la tua danza',
    colore: 'var(--magenta)',
    coloreBordo: 'var(--magenta)',
    classi: ['corso-card--principale', 'corso-card--divas-dance'],
    logo: { src: '/assets/loghi/divas-dance.png', alt: "Logo Diva's Dance" },
    paragrafi: [
      'Corso interamente al femminile per esplorare espressività, eleganza e sensualità attraverso lo studio della postura e coreografie dedicate.',
    ],
    locandina: {
      src: '/assets/locandine/divas-dance.png',
      alt: "Locandina Diva's Dance",
    },
    orariTitolo: 'Orari',
    orari: [
      [{ testo: 'Lunedì e Mercoledì — 18:00–19:00' }],
      [{ testo: 'Martedì — ' }, { testo: '19:45–20:45', barrato: true }],
    ],
    whatsapp:
      "https://wa.me/393491684350?text=Ciao!%20Vorrei%20info%20sul%20corso%20Diva's%20Dance",
  },
  {
    id: 'sit-fit-gym',
    cardId: 'corso-sit-fit-gym',
    nome: 'Sit Fit Gym',
    sottotitolo: 'Energia e divertimento in leggerezza',
    colore: 'var(--verde)',
    coloreBordo: 'var(--verde)',
    classi: ['corso-card--principale', 'corso-card--sit-fit-gym'],
    logo: { src: '/assets/loghi/sit-fit-gym.png', alt: 'Logo Sit Fit Gym' },
    paragrafi: [
      "Rinforzo muscolare dolce con l'aiuto della sedia, per proteggere schiena e articolazioni. Ideale anche per chi è fuori allenamento.",
    ],
    locandina: {
      src: '/assets/locandine/sit-fit-gym.png',
      alt: 'Locandina Sit Fit Gym',
    },
    orariTitolo: 'Orari',
    orari: [
      [{ testo: "Lunedì e Mercoledì — 17:00–17:45 (LUNEDI': SOLD OUT)" }],
    ],
    whatsapp:
      'https://wa.me/393491684350?text=Ciao!%20Vorrei%20info%20sul%20corso%20Sit%20Fit%20Gym',
  },
  {
    id: 'dance-4-you',
    cardId: 'corso-dance-4-you',
    nome: 'Dance 4 You',
    sottotitolo: 'Propedeutica alla danza classica',
    colore: 'var(--giallo-testo)',
    coloreBordo: 'var(--giallo)',
    classi: [
      'corso-card--principale',
      'corso-card--dance-4-you',
      'corso-card--con-badge',
    ],
    logo: { src: '/assets/loghi/dance-4-you.png', alt: 'Logo Dance 4 You' },
    badge: { testo: 'NOVITÀ', variante: 'novita' },
    paragrafi: ['Propedeutica alla danza classica per bambini e ragazzi:'],
    livelli: [
      {
        titolo: 'I livello (5-8 anni):',
        testo:
          'avvicinamento alla danza classica, ritmo, coordinazione e postura',
      },
      { titolo: 'II livello (9-12 anni):', testo: 'primi studi di danza classica' },
    ],
    maestra: 'Chiara Di Pinto',
    locandina: {
      src: '/assets/locandine/dance-4-you.png',
      alt: 'Locandina Dance 4 You',
    },
    orariTitolo: 'Orari',
    orari: [[{ testo: 'Martedì — 16:00–17:10' }]],
    whatsapp:
      'https://wa.me/393491684350?text=Ciao!%20Vorrei%20info%20sul%20corso%20Dance%204%20You',
  },
  {
    id: 'you-and-me',
    cardId: 'corso-you-and-me',
    nome: 'You and Me',
    sottotitolo: 'Mamma e bambino/a insieme',
    colore: 'var(--turchese)',
    coloreBordo: 'var(--turchese)',
    classi: [
      'corso-card--principale',
      'corso-card--you-and-me',
      'corso-card--con-badge',
    ],
    logo: { src: '/assets/loghi/you-and-me.png', alt: 'Logo You And Me' },
    badge: { testo: 'NOVITÀ', variante: 'novita' },
    paragrafi: [
      "Un'ora settimanale di tempo di qualità tra mamma e figlio/a (3-10 anni), tra gioco guidato, musica ed espressività.",
    ],
    locandina: {
      src: '/assets/locandine/you-and-me.png',
      alt: 'Locandina You and Me',
    },
    orariTitolo: 'Orari previsti',
    orari: [[{ testo: 'Giovedì — 16:00–17:00' }]],
    whatsapp:
      'https://wa.me/393491684350?text=Ciao!%20Vorrei%20info%20sul%20corso%20You%20and%20Me',
  },
  {
    id: 'dance-4-all',
    cardId: 'corso-dance-4-all',
    nome: 'Dance 4 All',
    sottotitolo: 'Scopri il tuo stile',
    colore: 'var(--bs-grigio)',
    coloreBordo: '#bbb',
    classi: [
      'corso-card--principale',
      'corso-card--dance-4-all',
      'corso-card--in-arrivo',
      'corso-card--con-badge',
    ],
    logo: { src: '/assets/loghi/dance-4-all.png', alt: 'Logo Dance 4 All' },
    badge: { testo: 'IN ARRIVO', variante: 'in-arrivo' },
    paragrafi: [
      'Salsa, bachata, reggaeton e molto altro. Anche senza partner, per tutte le età e livelli.',
    ],
    locandina: {
      src: '/assets/locandine/dance-4-all.png',
      alt: 'Locandina Dance 4 All',
    },
    whatsapp:
      'https://wa.me/393491684350?text=Ciao!%20Vorrei%20info%20sul%20corso%20Dance%204%20All',
  },
];

/** Categorie della sezione "I Nostri Corsi" */
export const categorieCorsi: { titolo: string; corsi: string[] }[] = [
  { titolo: 'Per donne', corsi: ['divas-dance', 'sit-fit-gym'] },
  {
    titolo: 'Per bambini/e e ragazzi/e',
    corsi: ['dance-4-you', 'you-and-me'],
  },
  { titolo: 'Per adulti', corsi: ['dance-4-all'] },
];

/** Balla&Snella: franchising ospitato, ha una sezione dedicata */
export const corsoBallaSnella: Corso = {
  id: 'balla-snella',
  cardId: 'corso-balla-snella',
  nome: 'Balla&Snella',
  sottotitolo: 'Dimagrire Ballando',
  colore: 'var(--bs-lilla)',
  coloreBordo: 'var(--bs-lilla)',
  classi: ['corso-card--franchising'],
  titoloSpezzato: [
    { testo: 'Balla', colore: 'var(--bs-lilla-chiaro)' },
    { testo: '&', colore: 'var(--magenta)' },
    { testo: 'Snella', colore: 'var(--bs-lilla)' },
  ],
  paragrafi: [
    'Percorso esclusivo dedicato alle donne che desiderano ritrovare la forma fisica divertendosi, favorendo socializzazione e benessere.',
  ],
  locandinaVuota: true,
  orariTitolo: 'Orari',
  orari: [
    [{ testo: 'Lunedì e Mercoledì — 19:15–20:15, 20:30–21:30' }],
    [
      { testo: 'Martedì — 08:30–09:30, 17:15–18:15, ' },
      { testo: '18:30–19:30', barrato: true },
    ],
    [
      { testo: 'Giovedì — 08:30–09:30, 17:15–18:15, ' },
      { testo: '18:30–19:30', barrato: true },
    ],
  ],
  frequenza: 'Frequenza: 2 volte a settimana',
  whatsapp:
    'https://wa.me/393491684350?text=Ciao!%20Vorrei%20info%20sul%20corso%20Balla%26Snella',
};

/** Tutti gli accordion della pagina (usato per l'apertura da URL con hash) */
export const tuttiICorsi: Corso[] = [...corsiPrincipali, corsoBallaSnella];

export function trovaCorso(id: string): Corso | undefined {
  return tuttiICorsi.find((c) => c.id === id);
}
