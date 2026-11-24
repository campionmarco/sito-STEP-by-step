'use client';

import { useEffect, useRef, useState } from 'react';
import { recensioni } from '@/data/recensioni';
import { recensioni as testiRecensioni } from '@/data/contenuti';

/**
 * Carosello recensioni: scroll-snap orizzontale, card centrale ingrandita
 * (IntersectionObserver) e frecce di navigazione.
 */
export default function Recensioni() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [indiceAttiva, setIndiceAttiva] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );

    // La card più visibile al centro del track diventa quella "attiva"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const indice = cards.indexOf(entry.target as HTMLDivElement);
            if (indice >= 0) setIndiceAttiva(indice);
          }
        });
      },
      { root: track, threshold: [0.6] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Scorre di una card alla volta (larghezza card + gap tra le card)
  function scorri(direzione: number) {
    const track = trackRef.current;
    const primaCard = cardsRef.current[0];
    if (!track || !primaCard) return;

    const larghezzaCard = primaCard.getBoundingClientRect().width;
    const gap = 20;
    track.scrollBy({
      left: direzione * (larghezzaCard + gap),
      behavior: 'smooth',
    });
  }

  return (
    <section id="recensioni">
      <h2>{testiRecensioni.titolo}</h2>
      <div className="recensioni-carosello-wrapper">
        <button
          className="recensioni-freccia recensioni-freccia--sinistra"
          aria-label="Recensione precedente"
          onClick={() => scorri(-1)}
        >
          &#10094;
        </button>

        <div className="recensioni-grid" id="recensioniTrack" ref={trackRef}>
          {recensioni.map((recensione, indice) => (
            <div
              key={recensione.autore}
              ref={(elemento) => {
                cardsRef.current[indice] = elemento;
              }}
              className={
                indice === indiceAttiva
                  ? 'recensione-card recensione-card--attiva'
                  : 'recensione-card'
              }
            >
              <div className="stelle">{recensione.stelle}</div>
              <p>{recensione.testo}</p>
              <span className="nome-recensore">{recensione.autore}</span>
            </div>
          ))}
        </div>

        <button
          className="recensioni-freccia recensioni-freccia--destra"
          aria-label="Recensione successiva"
          onClick={() => scorri(1)}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
