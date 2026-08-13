(function () {
  'use strict';

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

    document.querySelectorAll('.corso-accordion').forEach(function (item) {
      if (item !== accordion) setAccordionOpen(item, false);
    });

    setAccordionOpen(accordion, true);

    if (scroll) {
      const offset = 80; // Altezza navbar sticky
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

  // Collega click sui trigger accordion (desktop e mobile)
  function initAccordions() {
    document.querySelectorAll('.corso-accordion').forEach(function (accordion) {
      const trigger = accordion.querySelector('.corso-accordion-trigger');
      const panel = accordion.querySelector('.corso-accordion-panel');
      if (!trigger || !panel) return;

      wrapPanelContent(panel);
      setAccordionOpen(accordion, false);

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

  // Dalla tabella orari: scroll alla card del corso e aprila già espansa
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

  // Carosello recensioni: evidenzia la card più vicina al centro e collega le frecce
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

    // Scorre di una card alla volta (larghezza card + gap)
    function scorri(direzione) {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 20;
      track.scrollBy({ left: direzione * (cardWidth + gap), behavior: 'smooth' });
    }

    if (frecciaSx) frecciaSx.addEventListener('click', function () { scorri(-1); });
    if (frecciaDx) frecciaDx.addEventListener('click', function () { scorri(1); });

    // Attiva la prima card di default, prima che lo scroll/observer intervenga
    if (cards[0]) cards[0].classList.add('recensione-card--attiva');
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAccordions();
    initOrarioLinks();
    initHashOnLoad();
    initRecensioniCarosello();
    // --- MENU HAMBURGER MOBILE ---
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const navLinksList = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  if (hamburger) {
    // Apri/Chiudi menu al click sull'hamburger
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation(); // Evita che il click si propaghi al document
      navbar.classList.toggle('nav-aperta');
      hamburger.innerHTML = navbar.classList.contains('nav-aperta') ? '&times;' : '&#9776;';
    });

    // Chiudi il menu quando si clicca un link
    navLinksItems.forEach(function(link) {
      link.addEventListener('click', function() {
        navbar.classList.remove('nav-aperta');
        hamburger.innerHTML = '&#9776;';
      });
    });

    // Chiudi il menu se si clicca fuori
    document.addEventListener('click', function (e) {
      if (navbar.classList.contains('nav-aperta') && !navbar.contains(e.target)) {
        navbar.classList.remove('nav-aperta');
        hamburger.innerHTML = '&#9776;';
      }
    });
  }

  // --- STICKY REVEAL ON SCROLL ---
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Non nascondere se il menu mobile è aperto
    if(navbar.classList.contains('nav-aperta')) return;

    if (currentScroll > 100) {
      if (currentScroll > lastScrollTop) {
        // Scroll verso il basso -> nascondi
        navbar.style.transform = 'translateY(-100%)';
      } else {
        // Scroll verso l'alto -> mostra
        navbar.style.transform = 'translateY(0)';
      }
    } else {
      // In cima alla pagina -> mostra
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Previeni valori negativi
  });
  });
})();