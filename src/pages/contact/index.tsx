import Head from 'next/head'
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import ReactHtmlParser from 'react-html-parser';
import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';

import { Container } from '@/styles/pages/contact/styles';
import { client } from '@/lib/prismic';

interface IContact {
  contact: Document;
}

export default function Contact ({ contact }: IContact) {
  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Contact</title>
      </Head>
      <div className="section">
      <Container>
        <h1>{PrismicDOM.RichText.asText(contact.data.title)}</h1>
        <div>
          {ReactHtmlParser(PrismicDOM.RichText.asHtml(contact.data.contact))}
        </div>
      </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const contactInfo = await client().getSingle('contact', null);

  return {
    props: {
      contact: contactInfo,
    },
    revalidate: 60,
  }
}
