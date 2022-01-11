import { useState, useEffect } from "react"

import styles from "./styles"

import Key from "c/Key"
import getKeys from "services/getKeys"
import keypress from "services/KeyPress"
import KeyInfo from "c/KeyInfo"

function Keyboard({ info = false, speed, time, accuracy }) {
  const [keys, setKeys] = useState([])
  const [press, setPress] = useState("")
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    getKeys().then(setKeys)
    keypress(setPress)
  }, [])

  useEffect(() => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
      setPress("")
    }, 2000)
  }, [press])

  return (
    <>
      <div>
        {keys.length > 0 &&
          keys.map((itemKey, index) => {
            const lowerKey = itemKey.toLowerCase()
            return !info
            ? <Key
              key={index}
              character={itemKey}
              activeKey={
                press.toLowerCase() ===
                  (itemKey === "SPACE" ? " " : itemKey.toLowerCase()) &&
                isActive
                  ? true
                  : false
              }
            />
            : <KeyInfo
              key={index}
              character={itemKey}
              time={time[lowerKey]}
              accuracy={accuracy[lowerKey]}
              speed={speed[lowerKey]}
             />
          })}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keyboard
