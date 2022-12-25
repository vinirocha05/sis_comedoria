import { Content, Grid } from './styles';

export default function Sobre() {
  return (
    <Content id="sobre">
      <h2>Um pouquinho sobre a gente</h2>
      <Grid>
        <p>
          A Sis Comedoria nasceu do sonho de duas irmãs de oferecer uma comida
          gostosa e autêntica.
          <br /> Além de uma experência gastronômica aconchegante, a Comederia
          também proporcioja um ambiente agradável pra se fazer networking e
          cultivar amizades
        </p>
        <img src="/assets/moinho.png" alt="moinho" />
      </Grid>
    </Content>
  );
}
