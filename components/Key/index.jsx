import React from 'react'
import styles from "./styles"

const classKey = {
  ENTER: "enter",
  "SHIFT LEFT": "shift",
  SPACE: "space",
}

function Key({ character, activeKey }) {
  return (
    <>
      <div
        className={`${classKey[character] ? classKey[character] : ""} ${
          activeKey ? "active" : ""
        }`}
      >
        <span>{character}</span>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default React.memo(Key, (prevProps, nextProps) => {
  return (prevProps.activeKey === nextProps.activeKey)
})
