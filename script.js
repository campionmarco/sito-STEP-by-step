(function () {
  'use strict';

  // ===========================================================
  // ACCORDION CORSI (apertura/chiusura locandina + orari)
  // ===========================================================

  // Avvolge il contenuto del pannello per permettere l'animazione max-height
  function wrapPanelContent(panel) {
    if (panel.querySelector('.corso-accordion-content')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'corso-accordion-content';
    while (panel.firstChild) {
      wrapper.appendChild(panel.firstChild);
    }
    panel.appendChild(wrapper);
  }

  // Imposta lo stato aperto/chiuso dell'accordion e aggiorna gli attributi ARIA
  function setAccordionOpen(accordion, open) {
    const trigger = accordion.querySelector('.corso-accordion-trigger');
    const panel = accordion.querySelector('.corso-accordion-panel');
    if (!trigger || !panel) return;

    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  // Apre un accordion, chiude gli altri e opzionalmente scrolla/evidenzia la card
  function openAccordion(accordion, { scroll = false, highlight = false } = {}) {
    if (!accordion) return;

    // Chiude tutti gli altri accordion aperti (comportamento "un corso alla volta")
    document.querySelectorAll('.corso-accordion').forEach(function (item) {
      if (item !== accordion) setAccordionOpen(item, false);
    });

    setAccordionOpen(accordion, true);

    if (scroll) {
      const offset = 80; // Altezza navbar fixed, da sottrarre per non coprire il titolo del corso
      const top =
        accordion.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }

    if (highlight) {
      accordion.classList.add('is-highlight');
      window.setTimeout(function () {
        accordion.classList.remove('is-highlight');
      }, 2000);
    }
  }

  // Collega click sui trigger accordion (funziona sia su desktop che su mobile)
  function initAccordions() {
    document.querySelectorAll('.corso-accordion').forEach(function (accordion) {
      const trigger = accordion.querySelector('.corso-accordion-trigger');
      const panel = accordion.querySelector('.corso-accordion-panel');
      if (!trigger || !panel) return;

      wrapPanelContent(panel);
      setAccordionOpen(accordion, false); // Tutti chiusi all'avvio

      trigger.addEventListener('click', function () {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          setAccordionOpen(accordion, false);
        } else {
          openAccordion(accordion);
        }
      });
    });
  }

  // ===========================================================
  // COLLEGAMENTO TABELLA ORARI -> CARD CORSO
  // ===========================================================

  // Dalla tabella orari: click su un orario scrolla alla card del corso e la apre già espansa
  function initOrarioLinks() {
    document.querySelectorAll('.orario-link').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const corsoId = link.getAttribute('data-corso');
        const accordion = document.querySelector(
          '.corso-accordion[data-corso="' + corsoId + '"]'
        );
        openAccordion(accordion, { scroll: true, highlight: true });
        history.replaceState(null, '', '#' + accordion.id);
      });
    });
  }

  // Se la pagina viene aperta con hash (es. #corso-divas-dance), apre l'accordion corrispondente
  function initHashOnLoad() {
    const hash = window.location.hash;
    if (!hash) return;

    const accordion = document.querySelector(hash);
    if (accordion && accordion.classList.contains('corso-accordion')) {
      // Breve delay per attendere il layout prima dello scroll
      window.setTimeout(function () {
        openAccordion(accordion, { scroll: true, highlight: true });
      }, 100);
    }
  }

  // ===========================================================
  // CAROSELLO RECENSIONI
  // ===========================================================

  // Evidenzia la card più vicina al centro del carosello e collega le frecce di navigazione
  function initRecensioniCarosello() {
    const track = document.getElementById('recensioniTrack');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.recensione-card'));
    const wrapper = track.closest('.recensioni-carosello-wrapper');
    const frecciaSx = wrapper.querySelector('.recensioni-freccia--sinistra');
    const frecciaDx = wrapper.querySelector('.recensioni-freccia--destra');

    // Osserva quale card è più visibile/centrata nel track e le assegna la classe attiva
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            cards.forEach(function (c) { c.classList.remove('recensione-card--attiva'); });
            entry.target.classList.add('recensione-card--attiva');
          }
        });
      },
      { root: track, threshold: [0.6] }
    );
    cards.forEach(function (card) { observer.observe(card); });

    // Scorre di una card alla volta (larghezza card + gap tra le card)
    function scorri(direzione) {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 20;
      track.scrollBy({ left: direzione * (cardWidth + gap), behavior: 'smooth' });
    }

    if (frecciaSx) frecciaSx.addEventListener('click', function () { scorri(-1); });
    if (frecciaDx) frecciaDx.addEventListener('click', function () { scorri(1); });

    // Attiva la prima card di default, prima che scroll/observer intervengano
    if (cards[0]) cards[0].classList.add('recensione-card--attiva');
  }

  // ===========================================================
  // MENU HAMBURGER MOBILE
  // ===========================================================

  // Apre/chiude il pannello di navigazione su mobile e gestisce l'icona hamburger <-> X
  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (!hamburger || !navbar) return;

    // Apri/chiudi menu al click sull'hamburger
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation(); // Evita che il click si propaghi al document e richiuda subito il menu
      navbar.classList.toggle('nav-aperta');
      hamburger.innerHTML = navbar.classList.contains('nav-aperta') ? '&times;' : '&#9776;';
    });

    // Chiudi il menu quando si clicca un link (navigazione fluida su mobile)
    navLinksItems.forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.classList.remove('nav-aperta');
        hamburger.innerHTML = '&#9776;';
      });
    });

    // Chiudi il menu se si clicca fuori dalla navbar
    document.addEventListener('click', function (e) {
      if (navbar.classList.contains('nav-aperta') && !navbar.contains(e.target)) {
        navbar.classList.remove('nav-aperta');
        hamburger.innerHTML = '&#9776;';
      }
    });
  }

  // ===========================================================
  // NAVBAR A SCOMPARSA SU SCROLL (sticky reveal)
  // ===========================================================

  // Nasconde la navbar scorrendo verso il basso, la rimostra scorrendo verso l'alto
  function initStickyReveal() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Non nascondere la navbar se il menu mobile è aperto
      if (navbar.classList.contains('nav-aperta')) return;

      if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
          navbar.style.transform = 'translateY(-100%)'; // Scroll verso il basso -> nascondi
        } else {
          navbar.style.transform = 'translateY(0)'; // Scroll verso l'alto -> mostra
        }
      } else {
        navbar.style.transform = 'translateY(0)'; // In cima alla pagina -> mostra sempre
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Previene valori negativi
    });
  }

  // ===========================================================
  // COOKIE BANNER + GOOGLE ANALYTICS (caricato solo dopo consenso)
  // ===========================================================

  const COOKIE_CONSENSO_KEY = 'sbs-consenso-analytics'; // Chiave localStorage: 'accettato' | 'rifiutato'

  // Inietta dinamicamente lo script di Google Analytics (gtag.js) nella pagina
  function caricaGoogleAnalytics() {
    if (!window.GA_MEASUREMENT_ID || window.GA_MEASUREMENT_ID.indexOf('XXXXXXXXXX') !== -1) {
      return; // ID non ancora configurato: non caricare nulla
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GA_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', window.GA_MEASUREMENT_ID);
  }

  // Mostra/nasconde il banner (se presente in pagina) e collega i pulsanti Accetta/Rifiuta.
  // Il consenso è condiviso tra tutte le pagine del sito tramite localStorage.
  function initCookieBanner() {
    const scelta = localStorage.getItem(COOKIE_CONSENSO_KEY);

    if (scelta === 'accettato') {
      caricaGoogleAnalytics(); // Consenso già dato in precedenza (anche su un'altra pagina)
      return;
    }
    if (scelta === 'rifiutato') {
      return; // Rifiutato in precedenza: non mostrare più il banner, non caricare nulla
    }

    // Nessuna scelta salvata: mostra il banner, solo se presente in questa pagina
    const banner = document.getElementById('cookieBanner');
    if (!banner) return; // Pagine senza banner (es. note-legali.html) restano semplicemente inattive qui

    banner.hidden = false;

    const btnAccetta = document.getElementById('cookieAccetta');
    const btnRifiuta = document.getElementById('cookieRifiuta');

    if (btnAccetta) {
      btnAccetta.addEventListener('click', function () {
        localStorage.setItem(COOKIE_CONSENSO_KEY, 'accettato');
        banner.hidden = true;
        caricaGoogleAnalytics();
      });
    }
    if (btnRifiuta) {
      btnRifiuta.addEventListener('click', function () {
        localStorage.setItem(COOKIE_CONSENSO_KEY, 'rifiutato');
        banner.hidden = true;
      });
    }
  }

  // ===========================================================
  // AVVIO
  // ===========================================================

  document.addEventListener('DOMContentLoaded', function () {
    initAccordions();
    initOrarioLinks();
    initHashOnLoad();
    initRecensioniCarosello();
    initHamburger();
    initStickyReveal();
    initCookieBanner();
  });
})();