import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {FaInstagramSquare, FaFacebookSquare} from 'react-icons/fa';

import { Container, Header, Wrapper } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap" rel="stylesheet" />
      </Head>
      <Wrapper>
      
        <Header>
          <div className="socialMedia">
            <FaInstagramSquare size={24} />
            <FaFacebookSquare size={24} />
          </div>
          <div className="menu">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo_logo_tree_mastering-site.png" alt="Home" />
              </Link>
              <ul>
                <li><Link href="/clients">CLIENTS</Link></li>
                <li><Link href="/clients">MASTERING JOBS</Link></li>
                <li><Link href="/clients">SEND YOUR FILES</Link></li>
                <li><Link href="/clients">CONTACT</Link></li>
              </ul>
            </div>
            <img src="/images/tree-banner.jpg" alt="Home" />
          </div>
        </Header>
        <main>{children}</main>
      </Wrapper>
    </Container>
  )
}

export default Layout;