import Head from 'next/head'

export default function Home() {
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
  )
}
