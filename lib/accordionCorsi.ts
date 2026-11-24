'use client';

import { useSyncExternalStore } from 'react';

/**
 * Stato condiviso degli accordion dei corsi (equivalente di openAccordion()
 * in script.js): un corso aperto alla volta, più la "richiesta" di apertura
 * arrivata dalla tabella orari o da un URL con hash, che fa scorrere la
 * pagina sulla card e la evidenzia per 2 secondi.
 */

export type RichiestaApertura = {
  id: string;
  tipo: 'orari' | 'hash';
  /** progressivo: permette di riaprire la stessa card più volte */
  seq: number;
};

export type StatoAccordion = {
  aperto: string | null;
  richiesta: RichiestaApertura | null;
};

const STATO_INIZIALE: StatoAccordion = { aperto: null, richiesta: null };

let stato: StatoAccordion = STATO_INIZIALE;
const ascoltatori = new Set<() => void>();
let progressivo = 0;

function aggiorna(nuovo: StatoAccordion) {
  stato = nuovo;
  ascoltatori.forEach((a) => a());
}

function subscribe(ascoltatore: () => void) {
  ascoltatori.add(ascoltatore);
  return () => {
    ascoltatori.delete(ascoltatore);
  };
}

function getSnapshot() {
  return stato;
}

function getServerSnapshot() {
  return STATO_INIZIALE;
}

/** Click sul titolo del corso: apre/chiude (un corso alla volta) */
export function toggleCorso(id: string) {
  aggiorna({
    aperto: stato.aperto === id ? null : id,
    richiesta: null,
  });
}

/** Apertura da link degli orari o da URL con hash: apre, scorre ed evidenzia */
export function apriCorso(id: string, tipo: RichiestaApertura['tipo']) {
  progressivo += 1;
  aggiorna({ aperto: id, richiesta: { id, tipo, seq: progressivo } });
}

export function useAccordionCorsi(): StatoAccordion {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
