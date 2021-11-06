import GridLessons from "c/GridLessons"
import LoginForm from "c/LoginForm"
import styles from "./styles"

function LayoutHome() {
  return (
    <>
      <main>
        <section>
          <GridLessons />
          <GridLessons />
          <GridLessons />
        </section>
        <nav>
          <h1>Touch typing</h1>
          <LoginForm />
        </nav>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutHome
