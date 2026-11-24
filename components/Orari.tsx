'use client';

import { orari as testiOrari } from '@/data/contenuti';
import { frequenzaCorsi, orariSettimanali } from '@/data/orari';
import { trovaCorso } from '@/data/corsi';
import { apriCorso } from '@/lib/accordionCorsi';

export default function Orari() {
  // Click su un orario: apre la card del corso, la porta in vista e la evidenzia
  function apriDaOrario(
    evento: React.MouseEvent<HTMLAnchorElement>,
    idCorso: string
  ) {
    evento.preventDefault();
    const corso = trovaCorso(idCorso);
    if (!corso) return;

    apriCorso(corso.id, 'orari');
    window.history.replaceState(null, '', `#${corso.cardId}`);
  }

  return (
    <section id="orari" className="orari-section">
      <h2>{testiOrari.titolo}</h2>
      <p className="sottotitolo">{testiOrari.sottotitolo}</p>

      <div className="orari-grid">
        {orariSettimanali.map((giorno) => (
          <article className="orari-giorno-card" key={giorno.giorno}>
            <h3>{giorno.giorno}</h3>
            <ul className="orari-lista">
              {giorno.voci.map((voce, indice) => {
                const corso = trovaCorso(voce.corso);
                return (
                  <li key={`${voce.ora}-${indice}`}>
                    <a
                      href={`#${corso?.cardId ?? ''}`}
                      className="orario-link"
                      data-corso={voce.corso}
                      onClick={(evento) => apriDaOrario(evento, voce.corso)}
                    >
                      <span className="orario-ora">{voce.ora}</span>
                      <span
                        className="orario-nome"
                        style={{ color: corso?.colore }}
                      >
                        {voce.nome}
                        {voce.badge && (
                          <span className="badge badge--sold-out badge--inline">
                            {voce.badge}
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>

      <div className="orari-frequenza">
        <h3>{testiOrari.titoloFrequenza}</h3>
        <ul>
          {frequenzaCorsi.map((voce) => (
            <li key={voce.corso}>
              <strong>{voce.corso}:</strong> {voce.frequenza}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
