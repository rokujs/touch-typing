import Head from "next/head"

import Header from "c/Header"
import LayoutStats from "c/LayoutStats"
import getStats from "services/getStats"

export async function getServerSideProps() {
  const res = await getStats({ id: 1 })
  const { speed, time, progress } = res

  return { props: { speed, time, progress } }
}

function Stats({ speed, time, progress }) {
  return (
    <>
      <Head>
        <title>Stats</title>
      </Head>

      <Header />
      <LayoutStats speed={speed} time={time} progress={progress} />
    </>
  )
}

export default Stats
