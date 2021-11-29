import Link from 'next/link'

import LoginSocialNetwork from 'c/LoginSocialNetwork'
import styles from "./styles"

function FormRegister() {
  return (
    <>
      <div className='container'>
        <h1>Sign Up</h1>
        <LoginSocialNetwork />
        <form className='form'>
          <label>
            <span>UserName</span>
            <input type='text' placeholder='Username' />
          </label>
          <label>
            <span>First name</span>
            <input type='text' placeholder='First name' />
          </label>
          <label>
            <span>Last name</span>
            <input type='text' placeholder='Last name' />
          </label>
          <label>
            <span>Email</span>
            <input type='email' placeholder='Email' />
          </label>
          <label>
            <span>Password</span>
            <input type='password' placeholder='Password' />
          </label>
          <button type='submit'>
            <span>Sign Up</span>
          </button>
        </form>
          <footer className="login">Already have an account? <Link href="login"><a>Log in</a></Link></footer>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default FormRegister
