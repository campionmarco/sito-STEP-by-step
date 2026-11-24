/** Orari settimanali: ogni voce punta al corso corrispondente (id in data/corsi.ts) */

export type VoceOrario = {
  ora: string;
  /** id del corso a cui punta il link (apre l'accordion) */
  corso: string;
  /** nome mostrato nella tabella */
  nome: string;
  /** eventuale badge accanto al nome (es. SOLD OUT) */
  badge?: string;
};

export type GiornoOrari = { giorno: string; voci: VoceOrario[] };

export const orariSettimanali: GiornoOrari[] = [
  {
    giorno: 'Lunedì e Mercoledì',
    voci: [
      {
        ora: '17:00–17:45',
        corso: 'sit-fit-gym',
        nome: '\u00A0\u00A0Sit Fit Gym',
        badge: 'LUN: SOLD OUT',
      },
      { ora: '18:00–19:00', corso: 'divas-dance', nome: "Diva's Dance" },
      { ora: '19:15–20:15', corso: 'balla-snella', nome: 'Balla&Snella' },
      { ora: '20:30–21:30', corso: 'balla-snella', nome: 'Balla&Snella' },
    ],
  },
  {
    giorno: 'Martedì',
    voci: [
      { ora: '08:30–09:30', corso: 'balla-snella', nome: 'Balla&Snella' },
      { ora: '16:00–17:10', corso: 'dance-4-you', nome: 'Dance 4 You' },
      { ora: '17:15–18:15', corso: 'balla-snella', nome: 'Balla&Snella' },
      {
        ora: '18:30–19:30',
        corso: 'balla-snella',
        nome: 'Balla&Snella',
        badge: 'SOLD OUT',
      },
      {
        ora: '19:45–20:45',
        corso: 'divas-dance',
        nome: "Diva's Dance",
        badge: 'SOLD OUT',
      },
    ],
  },
  {
    giorno: 'Giovedì',
    voci: [
      { ora: '08:30–09:30', corso: 'balla-snella', nome: 'Balla&Snella' },
      { ora: '16:00–17:00', corso: 'you-and-me', nome: 'You and Me' },
      { ora: '17:15–18:15', corso: 'balla-snella', nome: 'Balla&Snella' },
      {
        ora: '18:30–19:30',
        corso: 'balla-snella',
        nome: 'Balla&Snella',
        badge: 'SOLD OUT',
      },
    ],
  },
];

/** Riepilogo frequenza settimanale mostrato sotto la griglia */
export const frequenzaCorsi: { corso: string; frequenza: string }[] = [
  { corso: 'Balla&Snella', frequenza: '2 volte a settimana' },
  { corso: "Diva's Dance", frequenza: '1 volta a settimana' },
  { corso: 'Sit Fit Gym', frequenza: '1 o 2 volte a settimana' },
  { corso: 'Dance 4 You', frequenza: '1 volta a settimana' },
  { corso: 'You and Me', frequenza: '1 volta a settimana' },
];
