import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

import {
  updateMinutes,
  updateVisualTime,
  startGame,
  updateCharacters,
  updatePpm,
  updateAverage,
} from "reducers/textInfoReducer"
import getText from "services/getText"

import Word from "c/Word"

function ViewText({ press, setPress }) {
  const [newListWords, setNewListWords] = useState([])
  const [character, setCharacter] = useState(0)
  const [word, setWord] = useState(0)
  const [isActiveListWords, setIsActiveListWords] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pressFailed, setPressFailed] = useState(false)
  const [firstPress, setFirstPress] = useState(false)
  const [countFailed, setCountFailed] = useState(0)

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    getText().then(data => {
      const charactersNumber = data.reduce((acc, cur) => acc + cur.length, 0)

      setNewListWords(data)
      setIsActiveListWords(data.map(arr => arr.map(() => true)))
      setIsLoading(true)
      dispatch(updateCharacters(charactersNumber))
    })
  }, [])

  useEffect(() => {
    if (isLoading && newListWords.length > word) {
      if (
        press === newListWords[word][character] &&
        isActiveListWords[word][character]
      ) {
        if (!firstPress) {
          setFirstPress(true)
          dispatch(startGame('/game'))
        }
        setPress("")

        const newIsActiveListWords = isActiveListWords
        newIsActiveListWords[word][character] = false

        setCharacter(char => (char += 1))
        setIsActiveListWords(newIsActiveListWords)

        if (newIsActiveListWords[word].every(w => w === false)) {
          setWord(w => (w += 1))
          setCharacter(0)
          dispatch(updateMinutes())
          dispatch(updatePpm(word + 1))
          dispatch(updateAverage(countFailed))
        }

        if (word === newListWords.length - 1 && newIsActiveListWords[word].every(w => w === false)) {
          router.push("/gameOver")
          dispatch(updateMinutes())
          dispatch(updatePpm(word + 1))
          dispatch(updateAverage(countFailed))
          dispatch(updateVisualTime())
        }
      }
    }
  }, [press, newListWords, word, character, isActiveListWords, isLoading])

  useEffect(() => {
    if (isLoading && newListWords.length > word) {
      if (press !== newListWords[word][character] && press !== "") {
        setPressFailed(true)
        setCountFailed(c => c + 1)
        setTimeout(() => {
          setPressFailed(false)
        }, 500)
      }
    }
  }, [press, isLoading])

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
          characterFailed={!pressFailed}
        />
      ))}
    </>
  )
}

export default ViewText
