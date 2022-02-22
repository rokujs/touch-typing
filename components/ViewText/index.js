import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"

import {
  updateMinutes,
  updateVisualTime,
  startGame,
  updateCharacters,
  updatePpm,
  updateAverage,
  textInfoSelector,
} from "reducers/textInfoReducer"
import {
  init,
  start,
  update,
  updateWord,
  updateCountFailed,
  gameSelector,
} from "reducers/gameReducer"

import getText from "services/getText"

import Word from "c/Word"

function ViewText({ press, setPress }) {
  const [newListWords, setNewListWords] = useState([])
  const [pressFailed, setPressFailed] = useState(false)

  const router = useRouter()
  const dispatch = useDispatch()
  const textInfo = useSelector(textInfoSelector)
  const game = useSelector(gameSelector)

  useEffect(() => {
    getText().then(data => {
      const charactersNumber = data.reduce((acc, cur) => acc + cur.length, 0)

      setNewListWords(data)
      dispatch(init(data))
      dispatch(updateCharacters(charactersNumber))
    })
  }, [])

  useEffect(() => {
    if (game.isLoading && newListWords.length > game.word) {
      if (
        press === newListWords[game.word][game.character] &&
        game.isActiveListWords[game.word][game.character]
      ) {
        if (!game.firstPress) {
          dispatch(start())
          dispatch(startGame("/game"))
        }
        setPress("")
        setPressFailed(false)

        const newIsActiveListWords = game.isActiveListWords.map(arr =>
          arr.map(item => item)
        )

        newIsActiveListWords[game.word][game.character] = false

        dispatch(update(newIsActiveListWords))

        if (newIsActiveListWords[game.word].every(w => w === false)) {
          dispatch(updateWord())
          dispatch(updateMinutes())
          dispatch(
            updatePpm({ words: game.word + 1, failures: game.countFailed })
          )
          dispatch(updateAverage(game.countFailed))
        }

        if (
          game.word === newListWords.length - 1 &&
          newIsActiveListWords[game.word].every(w => w === false)
        ) {
          router.push("/gameOver")
          dispatch(updateMinutes())
          dispatch(
            updatePpm({ words: game.word + 1, failures: game.countFailed })
          )
          dispatch(updateAverage(game.countFailed))
          dispatch(updateVisualTime())
        }
      }
    }
  }, [
    press,
    newListWords,
    game.word,
    game.character,
    game.isActiveListWords,
    game.isLoading,
  ])

  useEffect(() => {
    if (game.isLoading && newListWords.length > game.word) {
      if (press !== newListWords[game.word][game.character] && press !== "") {
        setPressFailed(true)
        dispatch(updateCountFailed())
      }
    }
  }, [press, game.isLoading])

  if (!game.isLoading) {
    return <div>Is loading</div>
  }

  return (
    <>
      {newListWords.map((itemListWord, index) => (
        <Word
          key={index}
          word={itemListWord}
          characterOnFocus={game.character}
          active={game.isActiveListWords[index]}
          onFocus={game.word === index}
          characterFailed={!pressFailed}
          reset={textInfo.reset}
        />
      ))}
    </>
  )
}

export default ViewText
