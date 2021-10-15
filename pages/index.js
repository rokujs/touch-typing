import Header from 'c/Header'
import LayoutHome from 'c/LayoutHome'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Touch typing</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <LayoutHome />
    </div>
  )
}
