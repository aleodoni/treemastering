import React, { useCallback } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import next, { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import {MdShoppingCart, MdChevronLeft, MdChevronRight} from 'react-icons/md'

import Layout from '../../components/Layout';

import { Container, JobInfo, Navigation } from '../../components/PagesStyles/Jobs/styles';

import jobs from '../../public/jobs/index.json';
import { parseISO, format } from 'date-fns';


type IJobDetails = {
  title: string;
  band: string;
  releaseDate: string;
  label: string;
  img: string;
  buy: string;
  nextJob: string;
  formattedDate: string;
  formattedImg: string;
  titleSlug: string;
}

type ILinkJob = {
  title: string;
  slug: string;
}

interface IProps {
  job : IJobDetails,
  nextJob: ILinkJob,
  previousJob: ILinkJob,
}

const JobDetail: React.FC<IProps> = ({job, nextJob, previousJob}) => {

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
        <JobInfo>
          <h1>{job.title}</h1>
          <img src={generateImg(job.img)} />
          <div className="info">
            <Link href={job.buy} passHref>
              <a>
                <MdShoppingCart size={20}/>
                Buy Now
              </a>
            </Link>
            <span><b>{job.band}</b> - {job.title}</span>
            <span><b>Release date:</b> {formatDate(job.releaseDate)}</span>
            <span><b>Label:</b> {job.label}</span>
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
  const {title} = context.params;

  const formattedJobs = jobs.jobs.map(job => {
    return {
      ...job,
      titleSlug: job.title.replace(/\s+/g, ''),
    }
  })

  const indexJob = formattedJobs.findIndex(job => (job.titleSlug === title));
  const selectedJob = formattedJobs[indexJob];

  let nextJob: ILinkJob | null = {slug: '', title: ''};
  let previousJob: ILinkJob | null = {slug: '', title: ''};

  if (indexJob < formattedJobs.length - 1) {
    nextJob.slug = formattedJobs[indexJob + 1].titleSlug;
    nextJob.title =  formattedJobs[indexJob + 1].title;
  } else {
    nextJob = null;
  }

  if (indexJob > 0) {
    previousJob.slug = formattedJobs[indexJob - 1].titleSlug;
    previousJob.title =  formattedJobs[indexJob - 1].title;
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
  const jobTitles = jobs.jobs.map(job => {
    return { params: { title: job.title.replace(/\s+/g, '') } }
  });

  return  {
    paths: jobTitles,
    fallback: false,
  }
}

export default JobDetail;