import React from 'react';
import Head from 'next/head'
import Layout from '@/components/Layout/index';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Tree Mastering | Mastering</title>
      </Head>
      <div className="section">
        <h1>To send your files:</h1>
        <p>Upload the pre-master file in 24-bit / 44.100khz with maximum peak -6db without dithering, normalize and any process / limiting in the master channel.</p>
        <p>Formats: Wav or Aiff</p>
        <p>The track should be named as follows:</p>
        <p>“Artist – track name (Original, remix, etc) NM”</p>
        <p>Send the pre-master file link to <b>treemastering@gmail.com</b></p>
        <p>We will be reviewing the mix, if there are corrections to be made we’ll report to you one time so you can re-leveling and correct the mix.</p>
      </div>
    </Layout>
  )
}

export default Home;

