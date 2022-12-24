import styled from 'styled-components';

export type NavMobileProps = {
  open: boolean;
};

export const Header = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100vw;
  top: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 100;
`;

export const Content = styled.div`
  img {
    height: 30px;
  }
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 96rem;
  margin: 2rem auto;
  font-size: ${({ theme }) => theme.spacings.medium};
  ul {
    list-style: none;
    display: flex;
  }
  ul li {
    margin: 0 2rem;
    :after {
      border-radius: 5px;
      left: 0%;
      width: 0;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      display: block;
      content: '';
      transition: 0.5s ease-in-out;
    }
    :hover:after {
      width: 100%;
    }
  }
  span {
    display: none;
  }

  @media (max-width: 800px) {
    nav {
      display: none;
    }
    span {
      display: block;
      padding-right: 2rem;
    }

    img {
      padding-left: 2rem;
    }
  }
`;

export const NavMobile = styled.nav<NavMobileProps>`
  display: ${({ open }) => (open ? '' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  overflow-y: hidden;
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ul li {
    padding: 3rem 0;
  }

  span {
    position: absolute;
    right: 0;
    padding: 2rem;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
`;
