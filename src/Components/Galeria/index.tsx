import { Content, Grid } from './styles';

const fotos = [
  'foto_croissant_2.jpg',
  'foto_linguica.jpg',
  'foto_hamburguer.jpg',
  'foto_lanche_parma.jpg',
  'foto_lanche_veg.jpg',
  'foto_lanche.jpg',
];

export default function Galeria() {
  return (
    <Content id="galeria">
      <h2>Galeria</h2>
      <span>um pouquinho das nossas delícias</span>
      <Grid>
        {fotos.map((foto) => (
          <img key={foto} src={`/assets/${foto}`} alt="" srcSet="" />
        ))}
      </Grid>
    </Content>
  );
}
