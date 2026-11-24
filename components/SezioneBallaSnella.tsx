'use client';

import { ballaSnella } from '@/data/contenuti';
import { corsoBallaSnella } from '@/data/corsi';
import CorsoAccordion from './CorsoAccordion';

export default function SezioneBallaSnella() {
  return (
    <section id="balla-snella" className="sezione-speciale">
      <div className="sezione-speciale-inner corso-card corso-card--franchising">
        <p className="sezione-speciale-nota">{ballaSnella.nota}</p>
        <img
          src={ballaSnella.logo.src}
          alt={ballaSnella.logo.alt}
          className="sezione-speciale-logo"
        />
        <CorsoAccordion corso={corsoBallaSnella} />
      </div>
    </section>
  );
}
