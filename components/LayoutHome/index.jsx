import GridLessons from "c/GridLessons"
import NavbarUser from "c/NavbarUser"
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
          <NavbarUser />
        </nav>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutHome
