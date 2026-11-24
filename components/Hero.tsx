import { hero } from '@/data/contenuti';
import { contatti, logo } from '@/data/contatti';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={logo.src} alt={logo.alt} />
        <p className="hero-text">{hero.testo}</p>
        <a
          href={contatti.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
