import { footer } from '@/data/contatti';

type Props = {
  /** la pagina Note Legali non ripete il link alle note legali */
  mostraLinkLegale?: boolean;
};

export default function Footer({ mostraLinkLegale = true }: Props) {
  return (
    <footer id="footer">
      <p>
        <strong>{footer.ragioneSociale}</strong> — {footer.indirizzo}
      </p>
      <p>{footer.copyright}</p>
      <p className="credito-sviluppatore">
        Sito realizzato da{' '}
        <a href={footer.sviluppatore.url} target="_blank" rel="noopener noreferrer">
          {footer.sviluppatore.nome}
        </a>
      </p>
      {mostraLinkLegale && (
        <p className="footer-legale">
          <a href="/note-legali">{footer.notaLink}</a>
        </p>
      )}
    </footer>
  );
}
