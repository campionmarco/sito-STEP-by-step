'use client';

import { useSyncExternalStore } from 'react';

/**
 * Consenso cookie/Google Analytics, condiviso tra le pagine tramite
 * localStorage (stessa chiave del sito originale).
 */

export type Consenso = 'accettato' | 'rifiutato' | null;

export const CHIAVE_CONSENSO = 'sbs-consenso-analytics';

let stato: Consenso | undefined;
const ascoltatori = new Set<() => void>();

function notifica() {
  ascoltatori.forEach((a) => a());
}

export function leggiConsenso(): Consenso {
  if (stato !== undefined) return stato;
  if (typeof window === 'undefined') return null;
  const salvato = window.localStorage.getItem(CHIAVE_CONSENSO);
  stato =
    salvato === 'accettato' || salvato === 'rifiutato' ? salvato : null;
  return stato;
}

export function salvaConsenso(valore: 'accettato' | 'rifiutato') {
  stato = valore;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CHIAVE_CONSENSO, valore);
  }
  notifica();
}

function subscribe(ascoltatore: () => void) {
  ascoltatori.add(ascoltatore);
  return () => {
    ascoltatori.delete(ascoltatore);
  };
}

function getServerSnapshot(): Consenso {
  return null;
}

export function useConsenso(): Consenso {
  return useSyncExternalStore(subscribe, leggiConsenso, getServerSnapshot);
}
