import Head from 'next/head'

export default function FourOhFour(){
  return <div
    className="flex h-screen w-full justify-center items-center"
  >
    <Head>
      <title>404</title>
    </Head>
    the requested page doesn't exist
  </div>
}