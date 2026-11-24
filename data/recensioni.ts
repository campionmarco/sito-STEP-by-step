/** Recensioni mostrate nel carosello "Dicono di Noi" */
export type Recensione = {
  stelle: string;
  testo: string;
  autore: string;
};

export const recensioni: Recensione[] = [
  {
    stelle: '★★★★★',
    testo:
      "\"Un'esperienza bellissima ed emozionante. Vedere il lavoro realizzato dopo tanto impegno è stata una grande soddisfazione. Complimenti per come è stata gestita tutta la serata!\"",
    autore: '— M. Lucia',
  },
  {
    stelle: '★★★★★',
    testo:
      '"Nel ballo non impari solo passi: incontri persone, nascono amicizie e sorrisi. Grazie per la pazienza e per aver insegnato che tutti possono ballare. Una serata bellissima, emozione unica."',
    autore: '— Sara',
  },
  {
    stelle: '★★★★★',
    testo:
      '"La tua passione è contagiosa, grazie per aver reso ogni lezione un\'esperienza indimenticabile. Per me è stata un\'esperienza mai provata prima, e sono fiera di aver partecipato al saggio. Grazie di cuore."',
    autore: '— Larisa',
  },
  {
    stelle: '★★★★★',
    testo:
      '"Grazie di cuore maestra Eva per la tua speciale sensibilità. Questo percorso mi sta aiutando a ritrovare me stessa e il giorno del saggio è stato un\'esperienza semplicemente stupenda."',
    autore: '— Manuela P.',
  },
  {
    stelle: '★★★★★',
    testo:
      "\"Un'esperienza emozionante e ricca di significato! Ho trovato complicità con le compagne, nuove amicizie e tanta allegria, uscendo da questa avventura con più sicurezza in me stessa. Grazie Eva per aver creduto in noi!\"",
    autore: '— Michaela',
  },
  {
    stelle: '★★★★★',
    testo:
      "\"È stata un'emozione grandissima e un'esperienza bellissima, fatta di balli allegri e colorati in un clima di totale leggerezza e rispetto. Grazie di cuore per questa fantastica opportunità!\"",
    autore: '— Caterina',
  },
];
