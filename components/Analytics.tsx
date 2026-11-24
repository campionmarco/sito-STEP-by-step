'use client';

import Script from 'next/script';
import { useConsenso } from '@/lib/consenso';

/**
 * Google Analytics: lo script viene caricato SOLO dopo il consenso
 * (banner cookie), come nello script.js originale.
 * L'ID di misurazione si imposta con NEXT_PUBLIC_GA_ID.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-M2K0XS64FY';

export default function Analytics() {
  const consenso = useConsenso();
  const caricare =
    consenso === 'accettato' &&
    Boolean(GA_ID) &&
    !GA_ID.includes('XXXXXXXXXX');

  if (!caricare) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}
