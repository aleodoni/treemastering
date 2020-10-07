import React, { useCallback } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import {format, parseISO} from 'date-fns';

import { formatSlug } from '../../lib/format';

import Layout from '../../components/Layout';

import jobs from '../../public/jobs/index.json';

import { Container, Job } from '../../components/PagesStyles/Jobs/styles';
import { GetStaticProps } from 'next';

type Job = {
  title: string;
  band: string;
  releaseDate: string;
  label: string;
  img: string;
  buy: string;
  titleSlug: string;
};

interface IProps {
  header: string;
  jobs: Job[];
}

const Jobs: React.FC<IProps> = ({header, jobs}) => {
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
        <h1>{header}</h1>
        <ul>
          { jobs.map((job) => (
            <div key={job.titleSlug}>
              <li>
                <Job>
                  <Link href={`/jobs/${job.titleSlug}`}>
                    <img src={generateImg(job.img)} />
                  </Link>
                  <div className="info">
                    <h1>{job.title}</h1>
                    <span><b>{job.band}</b> - {job.title}</span>
                    <span><b>Release date:</b> {formatDate(job.releaseDate)}</span>
                    <span><b>Label:</b> {job.label}</span>
                    <Link href={`/jobs/${job.titleSlug}`}>Details</Link>
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

export default Jobs;

export const getStaticProps: GetStaticProps = async () => {
  
  const formattedJobs = jobs.jobs.map(job => {
    return {
      ...job,
      titleSlug: formatSlug(job.title),
    }
  })

  return {
    props: {
      header: jobs.header,
      jobs: formattedJobs
    },
    revalidate: 60,
  }
}