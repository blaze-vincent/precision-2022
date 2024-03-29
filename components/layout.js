import Head from "next/head"
import Header from './header'
import Footer from './footer'

export default function Layout({children}){
  return (<>
    <Head>
      <title>nextjs w/ tailwindcss</title>
      <meta name="description" content="bv nextjs template with tailwindcss" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main
      className="min-h-[70rem] max-w-screen-2xl m-auto "
    >
      {children}
    </main>

    <Footer />
    </>)
}