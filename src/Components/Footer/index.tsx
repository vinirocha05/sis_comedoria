import Link from 'next/link';
import { Footer, Grid } from './styles';

export default function FooterContainer() {
  return (
    <Footer id="footer">
      <Grid>
        <div className="mapa">
          <h2>Onde estamos</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.0240078943634!2d-54.831381!3d-22.201193900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a97664e4b875%3A0xef28d47665071733!2sAv.%20Dom%20Redovino%2C%201015%20-%20Dourados%2C%20MS%2C%2079450-000!5e0!3m2!1spt-BR!2sbr!4v1672003761605!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        <div className="redes-sociais">
          <p>
            Gostou do nosso trabalho? <br />
            Entre em contato conosco
          </p>
          <ul>
            <Link href="https://www.instagram.com/siscomedoria/">
              <li>
                <img src="/assets/instagram.png" alt="ícone whatsapp" />
                Instagram
              </li>
            </Link>
            <Link href="https://wa.me/5567992530457">
              <li>
                <img src="/assets/whatsapp.png" alt="ícone instagram" />
                Whatsapp
              </li>
            </Link>
          </ul>
        </div>
      </Grid>
    </Footer>
  );
}
