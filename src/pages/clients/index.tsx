import Head from 'next/head'
import { Document } from 'prismic-javascript/types/documents';
import { GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';
import ReactHtmlParser from 'react-html-parser';

import Layout from '@/components/Layout';

import { client } from '@/lib/prismic';

import { Container } from '@/styles/pages/clients/styles';

interface IClient {
  clients: Document; 
}

export default function Clients({ clients }: IClient) {
  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Clients</title>
      </Head>
      <div className="section">
      <Container>
      <h1>{PrismicDOM.RichText.asText(clients.data.title)}</h1>
      {ReactHtmlParser(PrismicDOM.RichText.asHtml(clients.data.clients))}
      </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const clientInfo = await client().getSingle('clients', null);

  return {
    props: {
      clients: clientInfo,
    },
    revalidate: 60,
  }
}