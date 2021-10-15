import GridLevels from "c/GridLevels"
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
        </nav>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutHome
