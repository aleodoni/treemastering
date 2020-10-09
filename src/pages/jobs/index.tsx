import { useCallback } from 'react';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import ReactHtmlParser from 'react-html-parser';
import { GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import {format, parseISO} from 'date-fns';

import { formatSlug } from '@/lib/format';

import Layout from '@/components/Layout';

import { client } from '@/lib/prismic';

import { Container, Job } from '@/styles/pages/jobs/styles';

interface IJob {
  title: Document;
  jobs: Document[];
}

export default function Jobs({ title, jobs }: IJob) {
  const generateImg = useCallback((image) => {
    return `/images/${image}`;
  }, [])

  const formatDate = useCallback((date) => {
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "LLL'.' dd',' yyyy");
    
    return formattedDate;
  }, [])

  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Contact</title>
      </Head>
      <div className="section">
      <Container>
        {ReactHtmlParser(PrismicDOM.RichText.asHtml(title.data.title))}
        <ul>
          { jobs.map((job) => (
            <div key={job.uid}>
              <li>
                <Job>
                  <Link href={`/jobs/${job.uid}`}>
                    <img src={job.data.image.url} />
                  </Link>
                  <div className="info">
                    {/* <h1>{job.data.title}</h1> */}
                    {ReactHtmlParser(PrismicDOM.RichText.asHtml(job.data.title))}
                    <span>
                      <b>{ReactHtmlParser(PrismicDOM.RichText.asText(job.data.band))} - </b>
                      {ReactHtmlParser(PrismicDOM.RichText.asText(job.data.title))}
                    </span>
                    <span><b>Release date:</b> {formatDate(job.data.release_date)}</span>
                    <span><b>Label:</b> {PrismicDOM.RichText.asText(job.data.label)}</span>
                    <Link href={`/jobs/${job.uid}`}>Details</Link>
                  </div>
                </Job>
              </li>
              <hr />
            </div>              

          ))}
        </ul>
      </Container>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const title = await client().getSingle('mastering_job_title', {});

  const jobs = await client().query([
    Prismic.Predicates.at('document.type', 'mastering_job')
  ], {
    pageSize: 100, 
    orderings: '[my.mastering_job.release_date desc]',
  })

  return {
    props: {
      title,
      jobs: jobs.results
    },
    revalidate: 60,
  }
}