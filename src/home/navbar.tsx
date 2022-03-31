import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getIcon } from 'src/styles/icons';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  position: absolute;
  width: 90%;

  @media (min-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  .nav-item {
    border-bottom: 1px solid #6c63ff;
  }

  .icon {
    font-size: 2.5rem;
  }
`;

const NavBar: NextPage = () => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="logo" height="50px" width="50px" />
        </a>
      </Link>
      <RightItemsContainer>
        <a href="mailto:besworesumes@gmail.com?cc=190031840@kluniversity.in&bcc=190030025@kluniversity.in&subject=Need%20some%20help!&body=Hey%20BesWor%20Team%2C%0D%0AI%20got%20struck%20with%20some%20issue%20within%20your%20BesWor%20Resume%20Builder%20application%2C%20Can%20I%20get%20Some%20Help.%0D%0A%0D%0AName%3A%0D%0AIssue%3A" className="nav-item show-web">Contact Us</a>
      </RightItemsContainer>
    </Nav>
  );
};

export default NavBar;
