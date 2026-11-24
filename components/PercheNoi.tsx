import { percheNoi } from '@/data/contenuti';

export default function PercheNoi() {
  return (
    <section id="perche-noi">
      <div className="perche-noi">
        <h3>{percheNoi.titolo}</h3>
        <ul>
          {percheNoi.motivi.map((motivo) => (
            <li key={motivo.titolo}>
              <strong>{motivo.titolo}</strong> — {motivo.testo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
