/** Testi delle sezioni della home (contenuti editabili senza toccare il codice) */

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#corsi', label: 'Corsi' },
  { href: '#orari', label: 'Orari' },
  { href: '#recensioni', label: 'Dicono di Noi' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#impegno', label: 'Il Nostro Impegno' },
  { href: '#contatti', label: 'Contatti' },
];

export const hero = {
  testo:
    'Scuola di danza nel cuore di Rovigo — un percorso su misura per ogni età e ogni esigenza',
  cta: 'Scrivici su WhatsApp',
};

export const chiSiamo = {
  titolo: 'Chi Siamo',
  paragrafi: [
    "Nata nel 2022, Step by Step è un'Associazione Sportiva Dilettantistica che ha operato a lungo nel territorio del Basso Padovano e che oggi si concentra stabilmente nel centro di Rovigo.",
    "Promuoviamo il benessere psicofisico e l'inclusione attraverso la gioia del movimento e della danza, offrendo corsi personalizzati in un ambiente complice e sereno.",
  ],
};

export const corsi = {
  titolo: 'I Nostri Corsi',
  sottotitolo: 'Un percorso pensato per ogni esigenza',
  cta: 'Info su WhatsApp',
  etichettaMaestra: 'Maestra:',
  etichettaOrari: 'Orari',
};

export const ballaSnella = {
  nota: 'Franchising ospitato presso Step by Step ASD',
  logo: {
    src: '/assets/loghi/logo-balla-e-snella.png',
    alt: 'Logo Balla&Snella',
  },
};

export const danzaBenessere = {
  nota: 'Progetto in collaborazione con le strutture del territorio',
  titolo: 'Danza e Benessere',
  sottotitolo: "Per l'inclusione",
  colore: 'var(--arancio)',
  testo:
    'Collaboriamo con le strutture del territorio per incontri di danza dedicati a potenziamento, coordinazione e socializzazione, in un percorso pensato per valorizzare le capacità di ogni partecipante.',
  whatsapp:
    'https://wa.me/393491684350?text=Ciao!%20Vorrei%20info%20su%20Danza%20e%20Benessere',
  cta: 'Info su WhatsApp',
};

export const percheNoi = {
  titolo: 'Perché scegliere Step by Step?',
  motivi: [
    {
      titolo: 'Massima flessibilità per i turnisti',
      testo: 'adattiamo lezioni e appuntamenti ai tuoi turni lavorativi',
    },
    {
      titolo: 'Un ambiente su misura per te',
      testo: 'un percorso creato per le tue esigenze specifiche',
    },
    {
      titolo: 'Inclusione e attenzione reale',
      testo: 'ogni allievo seguito rispettando i propri ritmi',
    },
    {
      titolo: 'Sede accessibile in pieno centro',
      testo: 'nel cuore di Rovigo, facile da raggiungere',
    },
  ],
};

export const orari = {
  titolo: 'Orari Corsi',
  sottotitolo: 'Programma settimanale — clicca su un corso per i dettagli',
  titoloFrequenza: 'Frequenza corsi',
};

export const recensioni = {
  titolo: 'Dicono di Noi',
};

export const galleria = {
  titolo: 'La Nostra Galleria',
  sottotitolo: 'I momenti più belli della nostra scuola',
};

export const impegno = {
  titolo: 'Il Nostro Impegno',
  card: [
    {
      titolo: 'Franchising Balla&Snella',
      testo:
        'Step by Step fa parte del network Balla&Snella, portando a Rovigo un metodo consolidato di benessere attraverso la danza.',
    },
    {
      titolo: 'Impegno Sociale',
      testo:
        'Crediamo nel dare valore al territorio: abbiamo devoluto una donazione alla Casa Sacra Famiglia di Fratta Polesine, sostenendo chi ne ha più bisogno.',
    },
  ],
};

export const contattiSezione = {
  titolo: 'Contattaci',
  sottotitolo: 'Scrivici per informazioni su corsi, orari e iscrizioni',
  etichette: {
    sede: '📍 Sede',
    telefono: '📞 Telefono / WhatsApp',
    email: '✉️ Email',
  },
  cta: '💬 Scrivici su WhatsApp',
};

export const cookieBanner = {
  testo:
    'Questo sito utilizza Google Analytics in forma anonima per statistiche di visita. Puoi accettare o rifiutare.',
  link: 'Maggiori info',
  accetta: 'Accetta',
  rifiuta: 'Rifiuta',
};
