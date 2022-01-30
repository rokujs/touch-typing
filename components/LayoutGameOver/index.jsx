import { useSelector } from "react-redux"

import { textInfoSelector } from "reducers/textInfoReducer"
import Button from "c/Button"
import styles from "./styles"

export default function LayoutGameOver() {
  const textInfo = useSelector(textInfoSelector)
  return (
    <>
      <main>
        <h1>Game Over</h1>
        <div>
          <section>
            <div>
              <h3>Speed</h3>
              <span className='speed'>{textInfo.ppm}</span>
              <small>wpm</small>
            </div>
          </section>
          <section>
            <div>
              <h3>Accuracy</h3>
              <span className='accuracy'>{textInfo.average}</span>
              <small>%</small>
            </div>
          </section>
          <section>
            <div>
              <h3>Time</h3>
              <span className='time'>
                {textInfo.visualMinutes}:{textInfo.visualSeconds}
              </span>
              <small>minutes</small>
            </div>
          </section>
        </div>
        <footer className='bottons'>
          <Button to='/'>Back to Home</Button>
          <Button to={textInfo.level}>Play Again</Button>
        </footer>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}
