import { contatti } from '@/data/contatti';
import { contattiSezione } from '@/data/contenuti';

export default function Contatti() {
  return (
    <>
      <section id="contatti">
        <h2>{contattiSezione.titolo}</h2>
        <p className="sottotitolo">{contattiSezione.sottotitolo}</p>
        <div className="contatti-grid">
          <div className="info-contatto">
            <p>
              <strong>{contattiSezione.etichette.sede}</strong>
              <br />
              {contatti.sede}
            </p>
            <p>
              <strong>{contattiSezione.etichette.telefono}</strong>
              <br />
              {contatti.telefono}
            </p>
            <p>
              <strong>{contattiSezione.etichette.email}</strong>
              <br />
              {contatti.email}
            </p>
          </div>
          <a
            href={contatti.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            {contattiSezione.cta}
          </a>
        </div>
      </section>

      <a
        href={contatti.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>
    </>
  );
}
