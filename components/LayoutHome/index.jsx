import GridLevels from "c/GridLevels"
import NavbarUser from "c/NavbarUser"
import styles from "./styles"

function LayoutHome() {
  return (
    <>
      <main>
        <section>
          <GridLevels />
          <GridLevels />
          <GridLevels />
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
