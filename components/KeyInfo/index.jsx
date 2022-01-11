import styles from "./styles"

const classKey = {
  ENTER: "enter",
  "SHIFT LEFT": "shift",
  SPACE: "space",
}

export default function KeyInfo({ character, time, accuracy, speed }) {
  return (
    <>
      <div className={`${classKey[character] ? classKey[character] : ""}`}>
        <span>{character}</span>
        <div className='info'>
          <p>
            speed:<span>{speed}</span>
          </p>
          <p>
            time:<span>{time}</span>
          </p>
          <p>
            accuracy:<span>{accuracy}%</span>
          </p>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
