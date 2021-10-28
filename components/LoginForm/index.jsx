import styles from "./styles"

function FormLogin() {
  return (
    <>
      <div className='container'>
        <h1>Login</h1>
        <form className='form'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button type='submit'>
            <span>Login</span>
          </button>
        </form>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default FormLogin
