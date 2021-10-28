import Head from "next/head"

import Header from "c/Header"
import LayoutLogin from "c/LayoutLogin"

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Header />
      <LayoutLogin />
    </>
  )
}

export default Login
