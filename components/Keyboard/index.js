import { useState, useEffect } from "react"

import styles from "./styles"

import Key from "c/Key"
import getKeys from "services/getKeys"

function Keyboard() {
  const [keys, setKeys] = useState([])

  useEffect(() => {
    getKeys().then(setKeys)
  }, [])

  return (
    <>
      <div>
        {keys.length > 0 &&
          keys.map((itemKey, index) => <Key key={index} character={itemKey} />)}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Keyboard
