import FormRegister from 'c/FormRegister'
import styles from "./styles.js"

function LayoutRegister() {
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

export default LayoutRegister
