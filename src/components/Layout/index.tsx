import React, { useCallback, useState } from 'react';
import Link from 'next/link'
import {FaInstagramSquare, FaFacebookSquare} from 'react-icons/fa';
import {MdMenu} from 'react-icons/md';

import { Container, Header, Wrapper, MenuMobile } from './styles';



const Layout: React.FC = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = useCallback(() => {
    setMenu((prevState) => {
      return !prevState;
    })
  }, [])

  return (
    <Container>
      <Wrapper>
        <Header>
          <div className="socialMedia">
            <Link href="http://instagram.com/treemastering" passHref>
              <a>
                <FaInstagramSquare size={24} />    
              </a>
            </Link>
            <Link href="http://facebook.com/treemastering" passHref>
              <a>
                <FaFacebookSquare size={24} />
              </a>
            </Link>
          </div>
          <div className="menu">
            <div className="logo">
              <div className="logoImg">
                <Link href="/">
                  <img src="/images/logo_logo_tree_mastering-site.png" alt="Home" />
                </Link>
              </div>
              <div className="logoMenu">
                <ul>
                  <li><Link href="/clients">CLIENTS</Link></li>
                  <li><Link href="/jobs">MASTERING JOBS</Link></li>
                  <li><Link href="/">SEND YOUR FILES</Link></li>
                  <li><Link href="/contact">CONTACT</Link></li>
                </ul>
              </div>
            </div>
            <br/>
            <img src="/images/tree-banner.jpg" alt="Home" />
          </div>
        </Header>
        <MenuMobile>
          <div className="burguer" onClick={() => handleMenu()}>
            <MdMenu size={30}/>
          </div>
          { menu && (
            <ul>
            <li><Link href="/clients">CLIENTS</Link></li>
            <li><Link href="/jobs">MASTERING JOBS</Link></li>
            <li><Link href="/">SEND YOUR FILES</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
          )}
          
        </MenuMobile>
        <div className="main">{children}</div>
      </Wrapper>
    </Container>
  )
}

export default Layout;