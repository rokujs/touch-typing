import Keyboard from "c/Keyboard"
import ViewText from "c/ViewText"

import styles from "./styles"

function LayoutGame() {
  return (
    <>
      <main>
        <section className='text'>
          <ViewText />
        </section>
        <section>
          <Keyboard />
        </section>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutGame
