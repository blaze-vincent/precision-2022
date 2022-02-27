import Head from "next/head"
import Header from './header/header'
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
      className="max-w-screen-xl m-auto p-4"
    >{children}</main>

    <Footer />
    </>)
}