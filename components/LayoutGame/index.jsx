import Keyboard from "c/Keyboard"
import ViewText from "c/ViewText"
import WordCalculator from "c/WordCalculator"

import styles from "./styles"

function LayoutGame() {
  return (
    <>
      <main>
        <section className='menu'></section>
        <section className='text'>
          <ViewText />
        </section>
        <section className='word'>
          {/* <WordCalculator /> */}
        </section>
        <section className="keyboard">
          <Keyboard />
        </section>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutGame
