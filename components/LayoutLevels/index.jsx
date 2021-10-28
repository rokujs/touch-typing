
import GridLevels from "c/GridLevels"
import styles from "./styles"

export default function LayoutLevels() {
  return (
    <>
      <main>
        <h1>Levels</h1>
        <section className="container">
          <GridLevels />
        </section>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}
