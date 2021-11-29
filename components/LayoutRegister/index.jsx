import FormRegister from 'c/FormRegister'
import styles from "./styles.js"

function LayoutLogin() {
  return (
    <>
      <main>
        <div>
          <FormRegister />
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutLogin
