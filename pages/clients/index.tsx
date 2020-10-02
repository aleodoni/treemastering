import React from 'react';
import Head from 'next/head'
import Layout from '../../components/Layout';

import clients from '../../public/clients/index.json';

import { Container } from './styles';

const Clients: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Clients</title>
      </Head>
      <section>
      <Container>
        <h1>Clients</h1>
        <ul>
          { clients.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
      </Container>
      </section>
    </Layout>
  )
}

export default Clients;