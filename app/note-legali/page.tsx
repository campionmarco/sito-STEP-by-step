import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blocchiLegali } from '@/data/noteLegali';

export const metadata: Metadata = {
  title: 'Note Legali e Privacy | Step by Step ASD',
  // noindex: pagina informativa, non deve comparire tra i risultati di ricerca
  robots: { index: false, follow: true },
};

export default function NoteLegali() {
  return (
    <>
      <Navbar variante="legale" />

      <section id="note-legali" className="pagina-legale">
        {blocchiLegali.map((blocco) => (
          <div key={blocco.titolo}>
            <h2>{blocco.titolo}</h2>
            <div className="legale-blocco">
              {blocco.righe.map((riga, indice) => (
                <p key={indice}>
                  {riga.etichetta && <strong>{riga.etichetta}</strong>}
                  {riga.etichetta && ' '}
                  {riga.prima}
                  {riga.link && <a href={riga.link.href}>{riga.link.testo}</a>}
                  {riga.dopo}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer mostraLinkLegale={false} />
    </>
  );
}
