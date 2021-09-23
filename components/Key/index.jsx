import styles from "./styles"

const classKey = {
  ENTER: 'enter',
  "SHIFT LEFT": 'shift',
  SPACE: "space"
}

function Key({ character }) {
  return (
    <>
      <div className={classKey[character]}>
        <span>{character}</span>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Key
