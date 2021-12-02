import Link from "next/link"

import LoginSocialNetwork from "c/LoginSocialNetwork"
import styles from "./styles"

function FormLogin() {
  return (
    <>
      <div className='container'>
        <h1>Login</h1>
        <LoginSocialNetwork login />
        <form className='form'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button type='submit'>
            <span>Login</span>
          </button>
        </form>
        <footer className='register'>
          Don&apos;t have an account?{" "}
          <Link href='register'>
            <a>Sign up</a>
          </Link>
        </footer>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default FormLogin
