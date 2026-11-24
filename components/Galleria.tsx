import { galleria } from '@/data/galleria';
import { galleria as testiGalleria } from '@/data/contenuti';

export default function Galleria() {
  return (
    <section id="galleria">
      <h2>{testiGalleria.titolo}</h2>
      <p className="sottotitolo">{testiGalleria.sottotitolo}</p>
      <div className="galleria-grid">
        {galleria.map((foto) => (
          <div className="galleria-item" key={foto.src}>
            <img src={foto.src} alt={foto.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
