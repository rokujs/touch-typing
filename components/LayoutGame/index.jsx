import { useState, useEffect } from "react"

import Keyboard from "c/Keyboard"
import ViewText from "c/ViewText"
import WordCalculator from "c/WordCalculator"
import MenuGamePage from "c/MenuGamePage"

import styles from "./styles"
import keypress, { unsubscribe } from "services/KeyPress"

function LayoutGame() {
  const [press, setPress] = useState("")

  useEffect(() => {
    keypress(setPress)

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      <main>
        <section className='view'>
          <div className='menu'>
            <MenuGamePage />
          </div>
          <div className='text'>
            <ViewText press={press} setPress={setPress} />
          </div>
          <div className='word'>
            <WordCalculator />
          </div>
        </section>
        <section className='keyboard'>
          <Keyboard press={press} />
        </section>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutGame
