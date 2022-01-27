import Head from "next/head"
import LayoutGameOver from "c/LayoutGameOver"
import Header from "c/Header"

function GameOver() {
  return (
    <>
      <Head>
        <title>GameOver</title>
      </Head>

      <Header />
      <LayoutGameOver />
    </>
  )
}

export default GameOver
