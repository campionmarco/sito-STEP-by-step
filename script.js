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

  document.addEventListener('DOMContentLoaded', function () {
    initAccordions();
    initOrarioLinks();
    initHashOnLoad();
  });
})();
