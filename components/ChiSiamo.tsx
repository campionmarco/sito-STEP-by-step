import { chiSiamo } from '@/data/contenuti';

export default function ChiSiamo() {
  return (
    <section id="chi-siamo">
      <h2>{chiSiamo.titolo}</h2>
      <div className="chi-siamo-content">
        {chiSiamo.paragrafi.map((paragrafo) => (
          <p key={paragrafo}>{paragrafo}</p>
        ))}
      </div>
    </section>
  );
}
