import Head from "next/head"

import Header from "c/Header"
import LayoutRegister from "c/LayoutRegister"

function Register() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <Header />
      <LayoutRegister />
    </>
  )
}

export default Register
