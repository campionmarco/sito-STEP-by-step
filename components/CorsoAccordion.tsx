'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import type { Corso } from '@/data/corsi';
import { corsi as testiCorsi } from '@/data/contenuti';
import { toggleCorso, useAccordionCorsi } from '@/lib/accordionCorsi';

type Props = { corso: Corso };

/**
 * Card corso con accordion: un corso aperto alla volta, apertura anche
 * dalla tabella orari (scroll con offset navbar + evidenziazione 2s).
 */
export default function CorsoAccordion({ corso }: Props) {
  const { aperto, richiesta } = useAccordionCorsi();
  const apertoOra = aperto === corso.id;
  const cardRef = useRef<HTMLElement | null>(null);
  const ultimaRichiesta = useRef(0);
  const [evidenziata, setEvidenziata] = useState(false);

  // Apertura richiesta dagli orari o da un URL con hash: scroll + highlight
  useEffect(() => {
    if (!richiesta || richiesta.id !== corso.id) return;
    if (richiesta.seq === ultimaRichiesta.current) return;
    ultimaRichiesta.current = richiesta.seq;

    const elemento = cardRef.current;
    if (!elemento) return;

    const offset = 80; // Altezza navbar fixed
    window.scrollTo({
      top: elemento.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });

    setEvidenziata(true);
    const timer = window.setTimeout(() => setEvidenziata(false), 2000);
    return () => window.clearTimeout(timer);
  }, [richiesta, corso.id]);

  const classiCard = [
    'corso-card',
    ...(corso.classi ?? []),
    'corso-accordion',
    evidenziata ? 'is-highlight' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const classiPanel = apertoOra
    ? 'corso-accordion-panel is-open'
    : 'corso-accordion-panel';

  return (
    <article
      className={classiCard}
      id={corso.cardId}
      data-corso={corso.id}
      ref={cardRef}
      style={{ borderTopColor: corso.coloreBordo }}
    >
      {corso.badge && (
        <span className={`badge badge--${corso.badge.variante}`}>
          {corso.badge.testo}
        </span>
      )}

      <button
        type="button"
        className="corso-accordion-trigger"
        aria-expanded={apertoOra}
        aria-controls={`panel-${corso.id}`}
        onClick={() => toggleCorso(corso.id)}
      >
        <span className="corso-accordion-header">
          {corso.logo && (
            <img
              src={corso.logo.src}
              alt={corso.logo.alt}
              className="corso-logo"
              onError={(evento) => {
                evento.currentTarget.style.display = 'none';
              }}
            />
          )}
          <span className="corso-accordion-titles">
            {corso.titoloSpezzato ? (
              <h3 className="titolo-balla-snella">
                {corso.titoloSpezzato.map((parte) => (
                  <span key={parte.testo} style={{ color: parte.colore }}>
                    {parte.testo}
                  </span>
                ))}
              </h3>
            ) : (
              <h3 style={{ color: corso.colore }}>{corso.nome}</h3>
            )}
            <p className="corso-sub">{corso.sottotitolo}</p>
          </span>
          <span className="corso-accordion-icon" aria-hidden="true" />
        </span>
      </button>

      <div
        className={classiPanel}
        id={`panel-${corso.id}`}
        role="region"
        aria-hidden={!apertoOra}
      >
        <div className="corso-accordion-content">
          {corso.paragrafi?.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}

          {corso.livelli && (
            <ul className="corso-livelli">
              {corso.livelli.map((livello) => (
                <li key={livello.titolo}>
                  <strong>{livello.titolo}</strong> {livello.testo}
                </li>
              ))}
            </ul>
          )}

          {corso.maestra && (
            <p className="corso-maestra">
              <strong>{testiCorsi.etichettaMaestra}</strong> {corso.maestra}
            </p>
          )}

          {corso.locandina && (
            <figure className="corso-locandina">
              <img
                src={corso.locandina.src}
                alt={corso.locandina.alt}
                loading="lazy"
              />
            </figure>
          )}
          {corso.locandinaVuota && <figure className="corso-locandina" />}

          {corso.orari && (
            <div className="corso-orari-dettaglio">
              <h4>{corso.orariTitolo ?? testiCorsi.etichettaOrari}</h4>
              <ul>
                {corso.orari.map((riga, indiceRiga) => (
                  <li key={indiceRiga}>
                    {riga.map((parte, indiceParte) => (
                      <Fragment key={indiceParte}>
                        {parte.barrato ? <s>{parte.testo}</s> : parte.testo}
                      </Fragment>
                    ))}
                  </li>
                ))}
              </ul>
              {corso.frequenza && (
                <p className="corso-frequenza">{corso.frequenza}</p>
              )}
            </div>
          )}

          <a href={corso.whatsapp} className="btn-small">
            {testiCorsi.cta}
          </a>
        </div>
      </div>
    </article>
  );
}
