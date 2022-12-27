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
              <Link href="#sobre">Sobre</Link>
            </li>
            <li>
              <Link href="#cardapio">Cardápio</Link>
            </li>
            <li>
              <Link href="#galeria">Galeria</Link>
            </li>

            <li>
              <Link href="#footer">Contato</Link>
            </li>
          </ul>
        </nav>
        {open ? '' : <span onClick={() => setOpen(!open)}>☰</span>}
      </Content>
      <NavMobile open={open}>
        <span onClick={() => setOpen(!open)}>&#x274c;</span>

        <ul>
          <li>
            <Link onClick={() => setOpen(!open)} href="#sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} href="#cardapio">
              Cardáio
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} href="#galeria">
              Galeria
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} href="#footer">
              Contato
            </Link>
          </li>
        </ul>
      </NavMobile>
    </Header>
  );
}
