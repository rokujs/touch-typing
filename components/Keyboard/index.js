import { useState, useEffect } from "react"

import styles from "./styles"

import Key from "c/Key"
import getKeys from "services/getKeys"
import KeyInfo from "c/KeyInfo"

function Keyboard({ info = false, speed, time, accuracy, press }) {
  const [keys, setKeys] = useState([])

  useEffect(() => {
    getKeys().then(setKeys)
  }, [])

  return (
    <>
      <div>
        {keys.length > 0 &&
          keys.map((itemKey, index) => {
            const lowerKey = itemKey.toLowerCase()
            return !info ? (
              <Key
                key={index}
                character={itemKey}
                activeKey={
                  press.toLowerCase() ===
                  (itemKey === "SPACE" ? " " : lowerKey)
                    ? true
                    : false
                }
              />
            ) : (
              <KeyInfo
                key={index}
                character={itemKey}
                time={time[lowerKey]}
                accuracy={accuracy[lowerKey]}
                speed={speed[lowerKey]}
              />
            )
          })}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keyboard
