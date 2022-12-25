import Cardapio from '../Components/Cardapio';
import Carrosel2 from '../Components/Carrosel2';
import Header from '../Components/Header';
import Sobre from '../Components/Sobre';

export default function Home() {
  return (
    <>
      <Header />
      <Carrosel2 />
      <Sobre />
      <Cardapio />
    </>
  );
}
