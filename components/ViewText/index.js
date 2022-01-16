import { useState, useEffect } from "react"

import Word from "c/Word"

import getText from "services/getText"
import keypress from "services/KeyPress"

function ViewText() {
  const [newListWords, setNewListWords] = useState([])
  const [character, setCharacter] = useState(0)
  const [word, setWord] = useState(0)
  const [isActiveListWords, setIsActiveListWords] = useState([])
  const [press, setPress] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getText().then(data => {
      setNewListWords(data)
      setIsActiveListWords(data.map(arr => arr.map(() => true)))
      setIsLoading(true)
    })
    keypress(setPress)
  }, [])

  useEffect(() => {
    if (isLoading) {
      if (
        press === newListWords[word][character] &&
        isActiveListWords[word][character]
      ) {
        const newIsActiveListWords = isActiveListWords;
        newIsActiveListWords[word][character] = false;
        setCharacter(char => (char += 1))
        setIsActiveListWords(newIsActiveListWords)
        if (newIsActiveListWords[word].every(w => w === false)) {
          setWord(w => (w += 1))
          console.log("word", word)
          setCharacter(0)
        }
        setPress("")
      }
    }
  }, [press, newListWords, word, character, isActiveListWords, isLoading])

  if (!isLoading) {
    return <div>Is loading</div>
  }

  return (
    <>
      {newListWords.map((itemListWord, index) => (
        <Word
          key={index}
          word={itemListWord}
          characterOnFocus={character}
          active={isActiveListWords[index]}
          onFocus={word === index}
          press={press}
        />
      ))}
    </>
  )
}

export default ViewText
