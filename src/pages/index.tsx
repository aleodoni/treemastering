import Head from 'next/head';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import ReactHtmlParser from 'react-html-parser';
import { GetStaticProps } from 'next';

import { client } from '@/lib/prismic';

import Layout from '@/components/Layout/index';

interface ISend {
  send: Document;
}

export default function Home({ send }: ISend ) {
  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Mastering</title>
      </Head>
      <div className="section">
      <h1>{PrismicDOM.RichText.asText(send.data.title)}</h1>
        <div>
          {ReactHtmlParser(PrismicDOM.RichText.asHtml(send.data.send))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const sendInfo = await client().getSingle('send', null);

  return {
    props: {
      send: sendInfo,
    },
    revalidate: 60,
  }
}


