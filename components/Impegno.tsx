import { impegno } from '@/data/contenuti';

export default function Impegno() {
  return (
    <section id="impegno">
      <h2>{impegno.titolo}</h2>
      <div className="impegno-grid">
        {impegno.card.map((card) => (
          <div className="impegno-card" key={card.titolo}>
            <h3>{card.titolo}</h3>
            <p>{card.testo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
