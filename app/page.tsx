import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ChiSiamo from '@/components/ChiSiamo';
import Corsi from '@/components/Corsi';
import SezioneBallaSnella from '@/components/SezioneBallaSnella';
import SezioneDanzaBenessere from '@/components/SezioneDanzaBenessere';
import PercheNoi from '@/components/PercheNoi';
import Orari from '@/components/Orari';
import Recensioni from '@/components/Recensioni';
import Galleria from '@/components/Galleria';
import Impegno from '@/components/Impegno';
import Contatti from '@/components/Contatti';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Corsi />
      <SezioneBallaSnella />
      <SezioneDanzaBenessere />
      <PercheNoi />
      <Orari />
      <Recensioni />
      <Galleria />
      <Impegno />
      <Contatti />
      <Footer />
      <CookieBanner />
    </>
  );
}
