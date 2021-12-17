import { useState, useEffect } from "react"

import styles from "./styles"

import Key from "c/Key"
import getKeys from "services/getKeys"
import keypress from "services/KeyPress"

function Keyboard() {
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
          keys.map((itemKey, index) => (
            <Key
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
          ))}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keyboard
