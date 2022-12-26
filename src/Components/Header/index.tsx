import Link from 'next/link';
import { useState } from 'react';
import { Header, Content, NavMobile } from './styles';

export default function HeaderContainer() {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Content>
        <Link href="/">
          <img src="/assets/logo_sis.png" alt="Logo Sis Comedoria" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="#sobre">
                <a> Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="#cardapio">
                <a>Cardápio</a>
              </Link>
            </li>
            <li>
              <Link href="#galeria">
                <a>Galeria</a>
              </Link>
            </li>

            <li>
              <Link href="#footer">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </nav>
        {open ? '' : <span onClick={() => setOpen(!open)}>☰</span>}
      </Content>
      <NavMobile open={open}>
        <span onClick={() => setOpen(!open)}>&#x274c;</span>

        <ul>
          <li>
            <Link href="#sobre">
              <a onClick={() => setOpen(!open)}> Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#cardapio">
              <a onClick={() => setOpen(!open)}>Cardáio</a>
            </Link>
          </li>
          <li>
            <Link href="#galeria">
              <a onClick={() => setOpen(!open)}>Galeria</a>
            </Link>
          </li>
          <li>
            <Link href="#footer">
              <a onClick={() => setOpen(!open)}>Contato</a>
            </Link>
          </li>
        </ul>
      </NavMobile>
    </Header>
  );
}
