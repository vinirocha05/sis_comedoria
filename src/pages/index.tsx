import Cardapio from '../Components/Cardapio';
import Carrosel from '../Components/Carrosel';
import Footer from '../Components/Footer';
import Galeria from '../Components/Galeria';
import Header from '../Components/Header';
import Sobre from '../Components/Sobre';

export default function Home() {
  return (
    <>
      <Header />
      <Carrosel />
      <Sobre />
      <Cardapio />
      <Galeria />
      <Footer />
    </>
  );
}
