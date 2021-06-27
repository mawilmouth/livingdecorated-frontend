import React from 'react';
import Head from 'next/head';
import ghost from '../lib/ghost';

interface HomeProps {
  data: any;
}

const Home: React.FC<HomeProps> = (props) => {
  console.log(props);

  return (
    <div>
      <Head>
        <title>LivingDecorated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="columns small-6 left">left</div>
        <div className="columns small-6 right">right</div>
      </div>
    </div>
  );
}

export async function getServerSideProps () {
  const data = await ghost.posts.browse();

  return {
    props: { data }
  };
}

export default Home;