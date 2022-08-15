import Head from 'next/head'

export default function FourOhFour(){
  return <div
    className="flex w-full justify-center items-center"
  >
    <Head>
      <title>Precision Coatings | 404</title>
    </Head>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
}