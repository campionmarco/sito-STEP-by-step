/** Contenuti della pagina Note Legali e Privacy */

export type RigaLegale = {
  /** etichetta in grassetto a inizio riga (es. "Partita IVA:") */
  etichetta?: string;
  prima: string;
  link?: { testo: string; href: string };
  dopo?: string;
};

export type BloccoLegale = { titolo: string; righe: RigaLegale[] };

const EMAIL = 'info.stepbystep.asd@gmail.com';

export const blocchiLegali: BloccoLegale[] = [
  {
    titolo: 'Note Legali',
    righe: [
      {
        etichetta: 'Ragione sociale:',
        prima:
          'Associazione Sportiva Dilettantistica Step by Step ETS - ASD/AC',
      },
      {
        etichetta: 'Sede legale:',
        prima: 'Via Girolamo Savonarola 160, 45100 Rovigo (RO)',
      },
      { etichetta: 'Partita IVA:', prima: 'IT01640950299' },
      { etichetta: 'Codice Fiscale:', prima: '93043770291' },
      {
        etichetta: 'Email di contatto:',
        prima: '',
        link: { testo: EMAIL, href: `mailto:${EMAIL}` },
      },
    ],
  },
  {
    titolo: 'Privacy Policy del Sito Web',
    righe: [
      {
        prima:
          'Il presente sito web ha natura puramente informativa/vetrina e non raccoglie dati personali tramite moduli di contatto: il contatto con la scuola avviene esclusivamente tramite link diretto a WhatsApp, gestito da Meta secondo le proprie condizioni d\u2019uso e privacy.',
      },
      {
        prima:
          "Il trattamento dei dati personali relativi all'iscrizione ai corsi (nome, contatti, dati del minore ove applicabile) avviene esclusivamente tramite il modulo di iscrizione cartaceo/digitale sottoscritto direttamente presso la segreteria della scuola, che riporta l'informativa privacy completa ai sensi del Regolamento UE 2016/679 (GDPR).",
      },
      {
        prima:
          'Per qualsiasi richiesta relativa al trattamento dei propri dati personali (accesso, rettifica, cancellazione) è possibile scrivere a',
        link: { testo: EMAIL, href: `mailto:${EMAIL}` },
        dopo: '.',
      },
    ],
  },
  {
    titolo: 'Cookie e Statistiche di Visita',
    righe: [
      {
        prima:
          'Questo sito utilizza Google Analytics, uno strumento statistico che raccoglie informazioni in forma aggregata e anonima sul numero di visitatori e sulle pagine più visitate, per aiutarci a migliorare il sito.',
      },
      {
        prima:
          'Google Analytics viene attivato solo dopo il consenso esplicito dato tramite il banner mostrato alla prima visita. È possibile revocare il consenso in qualsiasi momento cancellando i cookie del browser.',
      },
    ],
  },
];
