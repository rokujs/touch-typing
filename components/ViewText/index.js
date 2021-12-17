import { useState, useEffect } from "react"

import Text from "c/Text"

import getText from "services/getText"
import keypress from "services/KeyPress"

function ViewText() {
  const [newParagraph, setNewParagraph] = useState([])
  const [character, setCharacter] = useState(0)
  const [isActiveCharacter, setIsActiveCharacter] = useState([])
  const [press, setPress] = useState("")

  useEffect(() => {
    getText().then(data => {
      setNewParagraph(data)
      setIsActiveCharacter(data.map(() => true))
    })
    keypress(setPress)
  }, [])

  useEffect(() => {
    if (press === newParagraph[character]) {
      setCharacter(c => (c += 1))
      setIsActiveCharacter(arr => {
        arr[character] = false
        return arr
      })
      setPress('')
    }
  }, [press, newParagraph, character])

  return (
    <>
      {newParagraph.map((itemParagraph, index) => (
        <Text
          key={index}
          paragraph={itemParagraph}
          active={isActiveCharacter[index]}
          onFocus={character === index}
        />
      ))}
    </>
  )
}

export default ViewText
