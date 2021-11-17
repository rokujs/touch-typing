import Head from "next/head"

import Header from "c/Header"
import LayoutPlans from "c/LayoutPlans"

function Plans() {
  return (
    <>
      <Head>
        <title>Plans</title>
      </Head>
      <Header />
      <LayoutPlans />
    </>
  )
}

export default Plans
