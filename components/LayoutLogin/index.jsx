import FormLogin from 'c/LoginForm/index.jsx'
import styles from './styles.js'

function LayoutLogin() {
  return (
    <>
      <main>
        <FormLogin />
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutLogin
