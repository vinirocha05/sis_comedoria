import Link from 'next/link';
import { useState } from 'react';
import { Header, Content, NavMobile } from './styles';

export default function HeaderContainer() {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Content>
        <img src="/assets/vr_logo2.svg" alt="logo Vinicius Rocha" />
        <nav>
          <ul>
            <li>
              <Link href="#sobre">
                <a> Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="#tecnologias">
                <a>Produtos</a>
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
              <a onClick={() => setOpen(!open)}> Sobre mim</a>
            </Link>
          </li>
          <li>
            <Link href="#tecnologias">
              <a onClick={() => setOpen(!open)}>Tecnologias</a>
            </Link>
          </li>
          <li>
            <Link href="#projetos">
              <a onClick={() => setOpen(!open)}>Projetos</a>
            </Link>
          </li>
        </ul>
      </NavMobile>
    </Header>
  );
}
