'use client';

import { useEffect } from 'react';
import { categorieCorsi, corsiPrincipali, tuttiICorsi } from '@/data/corsi';
import { corsi as testiCorsi } from '@/data/contenuti';
import { apriCorso } from '@/lib/accordionCorsi';
import CorsoAccordion from './CorsoAccordion';

export default function Corsi() {
  // Se la pagina viene aperta con un hash (es. #corso-divas-dance),
  // apre l'accordion corrispondente
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const corso = tuttiICorsi.find((c) => c.cardId === hash.slice(1));
    if (!corso) return;

    // Breve delay per attendere il layout prima dello scroll
    const timer = window.setTimeout(() => apriCorso(corso.id, 'hash'), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="corsi">
      <h2>{testiCorsi.titolo}</h2>
      <p className="sottotitolo">{testiCorsi.sottotitolo}</p>

      {categorieCorsi.map((categoria) => (
        <div className="corsi-categoria" key={categoria.titolo}>
          <h3 className="corsi-categoria-titolo">{categoria.titolo}</h3>
          <div className="corsi-grid">
            {categoria.corsi.map((idCorso) => {
              const corso = corsiPrincipali.find((c) => c.id === idCorso);
              if (!corso) return null;
              return <CorsoAccordion corso={corso} key={corso.id} />;
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
