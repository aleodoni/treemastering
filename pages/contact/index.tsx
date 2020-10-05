import React from 'react';
import Head from 'next/head'
import Layout from '../../components/Layout';

import contacts from '../../public/contact/index.json';

import { Container } from '../../components/PagesStyles/Contact/styles';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Contact</title>
      </Head>
      <section>
      <Container>
        <h1>{contacts.header}</h1>
        <ul>
          { contacts.info.map((contact) => (
            <li key={contact.label}>{contact.label}: <a href={contact.link}>{contact.labelLink}</a></li>
          ))}
        </ul>
      </Container>
      </section>
    </Layout>
  )
}

export default Contact;