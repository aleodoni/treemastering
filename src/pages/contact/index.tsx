import React from 'react';
import Head from 'next/head'
import Layout from '@/components/Layout';

import contacts from '@contact/index.json';

import { Container } from '@/styles/pages/contact/styles';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Contact</title>
      </Head>
      <div className="section">
      <Container>
        <h1>{contacts.header}</h1>
        <ul>
          { contacts.info.map((contact) => (
            <li key={contact.label}>{contact.label}: <a href={contact.link}>{contact.labelLink}</a></li>
          ))}
        </ul>
      </Container>
      </div>
    </Layout>
  )
}

export default Contact;