import{ useCallback } from 'react';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import ReactHtmlParser from 'react-html-parser';
import Head from 'next/head'
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import {MdShoppingCart, MdChevronLeft, MdChevronRight} from 'react-icons/md'

import { client } from '@/lib/prismic';

import Layout from '@/components/Layout';

import { Container, JobInfo, Navigation } from '@/styles/pages/jobs/styles';

import { parseISO, format } from 'date-fns';

type ILinkJob = {
  slug?: string;
  title?: string;
}

interface IProps {
  job : Document,
  nextJob: ILinkJob,
  previousJob: ILinkJob,
}

export default function JobDetail ({job, nextJob, previousJob} :IProps) {

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
        <JobInfo>
          {ReactHtmlParser(PrismicDOM.RichText.asHtml(job.data.title))}
          <img src={job.data.image.url} />
          <div className="info">
            <Link href={job.data.buy.url} passHref>
              <a>
                <MdShoppingCart size={20}/>
                Buy Now
              </a>
            </Link>
            <span>
              <b>{ReactHtmlParser(PrismicDOM.RichText.asText(job.data.band))} - </b>
              {ReactHtmlParser(PrismicDOM.RichText.asText(job.data.title))}
            </span>
            <span><b>Release date:</b> {formatDate(job.data.release_date)}</span>
            <span><b>Label:</b> {PrismicDOM.RichText.asText(job.data.label)}</span>
          </div>
        </JobInfo>
        <Navigation>
          {previousJob && (
            <Link href={`/jobs/${previousJob.slug}`} passHref>
              <a>
                <MdChevronLeft size={20} />
                {previousJob.title}
              </a>
            </Link>
          )}
          {nextJob && (
            <Link href={`/jobs/${nextJob.slug}`} passHref>
              <a>
                {nextJob.title}
                <MdChevronRight size={20} />
              </a>
            </Link>
          )}
        </Navigation>
      </Container>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const jobs = await client().query([
    Prismic.Predicates.at('document.type', 'mastering_job')
  ], {
    pageSize: 100, 
    orderings: '[my.mastering_job.release_date desc]',
  })

  const indexJob = jobs.results.findIndex(job => (job.uid === slug));
  const selectedJob = jobs.results[indexJob];

  let nextJob: ILinkJob | null = {slug: '', title: ''};
  let previousJob: ILinkJob | null = {slug: '', title: ''};

  if (indexJob < jobs.results.length - 1) {
    nextJob.slug = jobs.results[indexJob + 1].uid;
    nextJob.title =  PrismicDOM.RichText.asText(jobs.results[indexJob + 1].data.title);
  } else {
    nextJob = null;
  }

  if (indexJob > 0) {
    previousJob.slug = jobs.results[indexJob - 1].uid;
    previousJob.title =  PrismicDOM.RichText.asText(jobs.results[indexJob - 1].data.title);
  } else {
    previousJob = null;
  }

  return {
    props: {
      job: selectedJob,
      nextJob,
      previousJob,
    },
    revalidate: 60,
  }

}

export const getStaticPaths: GetStaticPaths = async () => {
  const jobs = await client().query([
    Prismic.Predicates.at('document.type', 'mastering_job')
  ], {
    pageSize: 100, 
    orderings: '[my.mastering_job.release_date desc]',
  })

  const jobTitles = jobs.results.map(job => {
    return { params: { slug: job.uid } }
  });

  return  {
    paths: jobTitles,
    fallback: false,
  }
}
