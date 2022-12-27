import Link from 'next/link';
import { Content, Grid } from './styles';

export default function Cardapio() {
  return (
    <Content id="cardapio">
      <h2>Cardapio</h2>
      <span>um pouquinho das nossas delícias</span>
      <Grid>
        <img src="/assets/coffe.png" alt="moinho" />
        <div className="cardapio">
          <p>
            Nosso cardápio foi pensando especialmente para proporcionar
            experiências gastronômicas únicas.
            <br />
            Temos opções que vão desde o clássico cafezinho com pão na chapa do
            café da manhã, até incriveis porções para o Happy Hour
          </p>
          <Link href="https://drive.google.com/drive/folders/1SQT8zoUp7a895Cb1aIAkTRNYT_R9W6Rv">
            Link do cardápio
          </Link>
        </div>
      </Grid>
    </Content>
  );
}
