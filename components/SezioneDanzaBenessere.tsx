import { danzaBenessere } from '@/data/contenuti';

export default function SezioneDanzaBenessere() {
  return (
    <section
      id="danza-benessere"
      className="sezione-speciale sezione-speciale-inclusione"
    >
      <div className="sezione-speciale-inner corso-card corso-card--benessere">
        <p className="sezione-speciale-nota">{danzaBenessere.nota}</p>
        <h3 style={{ color: danzaBenessere.colore }}>
          {danzaBenessere.titolo}
        </h3>
        <p className="corso-sub">{danzaBenessere.sottotitolo}</p>
        <p>{danzaBenessere.testo}</p>
        <a
          href={danzaBenessere.whatsapp}
          className="btn-small"
        >
          {danzaBenessere.cta}
        </a>
      </div>
    </section>
  );
}
