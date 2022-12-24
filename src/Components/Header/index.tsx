import Link from 'next/link';
import { useState } from 'react';
import { Header, Content, NavMobile } from './styles';

export default function HeaderContainer() {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Content>
        <img src="/assets/logo_sis.png" alt="Logo Sis Comedoria" />
        <nav>
          <ul>
            <li>
              <Link href="#sobre">
                <a> Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="#tecnologias">
                <a>Cardápio</a>
              </Link>
            </li>

            <li>
              <Link href="#projetos">
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
            <Link href="#tecnologias">
              <a onClick={() => setOpen(!open)}>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="#projetos">
              <a onClick={() => setOpen(!open)}>Contato</a>
            </Link>
          </li>
        </ul>
      </NavMobile>
    </Header>
  );
}
