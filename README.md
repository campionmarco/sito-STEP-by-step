# Step by Step ASD — Sito Web

Sito vetrina della scuola di danza **Step by Step ASD** (Via Corridoni 2, Rovigo).
Progetto realizzato da **Marco Digital Solutions** come portfolio e come sito ufficiale della scuola.

🔗 **Sito online:** _https://stepbystepasd.vercel.app/_

---

## 📁 Struttura del progetto

```
sito-step-by-step/
├── index.html          # Pagina unica del sito (tutte le sezioni)
├── style.css            # Fogli di stile
├── script.js             # Interattività (accordion, menu mobile, carosello, navbar)
└── assets/
    ├── loghi/            # Logo scuola + loghi dei singoli corsi
    └── foto/              # Foto della galleria
```

Sito statico, nessun framework: HTML + CSS + JavaScript puro. Pubblicato su **Vercel**, collegato a questo repository GitHub (ogni push su `main` ripubblica automaticamente il sito).

---

## 🧩 Sezioni del sito (in ordine)

| Sezione | ID ancora | Descrizione |
|---|---|---|
| Home / Hero | `#home` | Logo, claim, bottone WhatsApp |
| Chi Siamo | `#chi-siamo` | Presentazione della scuola |
| I Nostri Corsi | `#corsi` | Card corsi principali (Diva's Dance, Sit Fit Gym, Dance 4 You, You and Me, Dance 4 All) con accordion per locandina e orari |
| Balla&Snella | `#balla-snella` | Sezione dedicata (corso in franchising, non gestito direttamente dalla scuola) |
| Danza e Benessere | `#danza-benessere` | Sezione dedicata (corso per la disabilità) |
| Perché Noi | `#perche-noi` | Punti di forza della scuola |
| Orari Corsi | `#orari` | Tabella settimanale (Lun/Mer, Mar, Gio) con link diretti alle card corso |
| Dicono di Noi | `#recensioni` | Carosello recensioni allieve |
| Galleria | `#galleria` | Griglia foto della scuola |
| Il Nostro Impegno | `#impegno` | Valori, franchising, beneficenza |
| Contatti | `#contatti` | Contatti e mappa |

---

## 🎨 Palette colori

Definita in `style.css` dentro `:root`. Ogni corso ha un colore identificativo, usato coerentemente su bordo card, nome corso in tabella orari e badge.

| Corso | Variabile CSS | Colore |
|---|---|---|
| Diva's Dance | `--magenta` | `#D03460` |
| Sit Fit Gym | `--verde` | `#86BC25` |
| Dance 4 You | `--giallo` | `#F4C123` |
| You and Me | `--turchese` | `#4DB6AC` |
| Dance 4 All | `--blu` | `#494495` |
| Balla&Snella | `--bs-lilla`, `--bs-lilla-chiaro`, `--bs-grigio` | `#8F8CBF`, `#A3A1C2`, `#666666` |
| Danza e Benessere | `--arancio` | `#FF5F00` |

> Per cambiare il colore di **un solo corso**, modifica solo la sua variabile o la sua classe dedicata (es. `.corso-card--divas-dance`) — le classi sono separate proprio per evitare che una modifica si propaghi a tutte le card.

---

## ⚙️ Funzionalità principali

- **Accordion corsi**: click sul titolo di un corso apre/chiude locandina e orari specifici (`script.js` → `initAccordions()`)
- **Collegamento orari → corso**: click su un orario nella sezione "Orari Corsi" scrolla alla card del corso e la apre automaticamente (`initOrarioLinks()`)
- **Menu mobile**: hamburger che apre/chiude la navigazione sotto i 768px (`initHamburger` in `script.js`, stili in `style.css` dentro `@media (max-width:768px)`)
- **Navbar a scomparsa**: si nasconde scorrendo verso il basso, riappare scorrendo verso l'alto
- **Carosello recensioni**: scroll orizzontale con `scroll-snap`, card centrale evidenziata via `IntersectionObserver` (`initRecensioniCarosello()`)

---

## 🛠️ Come modificare il sito

Il progetto è pensato per essere lavorato in **Cursor** (editor con agente AI). Per modifiche rapide senza Cursor, è possibile editare direttamente i tre file (`index.html`, `style.css`, `script.js`) con qualsiasi editor di testo — non richiede build o compilazione, basta salvare e ricaricare la pagina nel browser.

### Aggiungere una foto alla galleria
Aggiungere il file in `assets/foto/`, poi in `index.html` dentro `#galleria` aggiungere:
```html
<div class="galleria-item">
  <img src="assets/foto/nomefile.png" alt="Descrizione foto" loading="lazy">
</div>
```

### Aggiungere una recensione
In `index.html` dentro `#recensioniTrack`, copiare un blocco `.recensione-card` esistente e sostituire testo e nome.

### Aggiornare gli orari di un corso
Cercare `#orari` in `index.html` per la tabella settimanale, e la card del corso corrispondente in `#corsi` per il dettaglio nell'accordion.

---

## 📦 Deploy

- **Hosting**: Vercel (piano gratuito), collegato a questo repository
- **Dominio**: _(da aggiungere una volta registrato — vedi nota sotto)_
- Ogni push su `main` ripubblica automaticamente il sito in produzione

---

## 📝 Note per il proprietario (Step by Step ASD)

- Il dominio (se registrato) deve essere intestato alla scuola/associazione, non allo sviluppatore
- Le credenziali di accesso a Vercel e al registrar del dominio devono essere note anche al proprietario, non solo allo sviluppatore
- Per richieste di modifica al sito: contattare Marco Digital Solutions

---

*Ultimo aggiornamento: Agosto 2026*
