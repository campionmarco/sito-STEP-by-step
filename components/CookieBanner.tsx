'use client';

import { useEffect, useState } from 'react';
import { cookieBanner } from '@/data/contenuti';
import { leggiConsenso, salvaConsenso, useConsenso } from '@/lib/consenso';

/**
 * Banner cookie: come nell'originale parte nascosto e viene mostrato solo se
 * non esiste ancora una scelta salvata in localStorage.
 */
export default function CookieBanner() {
  const consenso = useConsenso();
  const [visibile, setVisibile] = useState(false);

  useEffect(() => {
    setVisibile(leggiConsenso() === null);
  }, []);

  function accetta() {
    salvaConsenso('accettato');
    setVisibile(false);
  }

  function rifiuta() {
    salvaConsenso('rifiutato');
    setVisibile(false);
  }

  const nascosto = !visibile || consenso !== null;

  return (
    <div id="cookieBanner" className="cookie-banner" hidden={nascosto}>
      <p>
        {cookieBanner.testo} <a href="/note-legali">{cookieBanner.link}</a>
      </p>
      <div className="cookie-banner-azioni">
        <button
          id="cookieRifiuta"
          className="btn-small btn-cookie-rifiuta"
          onClick={rifiuta}
        >
          {cookieBanner.rifiuta}
        </button>
        <button id="cookieAccetta" className="btn-small" onClick={accetta}>
          {cookieBanner.accetta}
        </button>
      </div>
    </div>
  );
}
