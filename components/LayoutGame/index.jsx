import { useState, useEffect } from "react"

import Keyboard from "c/Keyboard"
import ViewText from "c/ViewText"
import WordCalculator from "c/WordCalculator"

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
          <div className='menu'></div>
          <div className='text'>
            <ViewText press={press} setPress={setPress} />
          </div>
          <div className='word'>
            <WordCalculator />
          </div>
        </section>
        <section className='keyboard'>
          <Keyboard press={press} setPress={setPress} />
        </section>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutGame
