import Head from "next/head"
import LayoutLevels from "c/LayoutLevels"
import Header from "c/Header"

function Levels() {
  return (
    <>
      <Head>
        <title>Levels</title>
      </Head>

      <Header />
      <LayoutLevels />
    </>
  )
}

export default Levels
