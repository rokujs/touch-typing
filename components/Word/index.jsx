import React from "react"

import Text from "c/Text"
import { colors, size } from "s/theme"
function Word({ word, active, onFocus, characterOnFocus, characterFailed, reset }) {
  return (
    <>
      <div className='word'>
        {word.map((character, index) => (
          <Text
            key={index}
            character={character}
            active={active[index]}
            onFocus={index === characterOnFocus && onFocus}
            failed={characterFailed}
            reset={reset}
          />
        ))}
      </div>
      <style jsx>{`
        .word {
          display: inline-block;
        }
      `}</style>
    </>
  )
}

export default React.memo(Word, (prevProps, nextProps) => {
  return (
    !prevProps.onFocus &&
    !nextProps.onFocus &&
    prevProps.characterFailed === nextProps.characterFailed &&
    prevProps.reset === nextProps.reset
  )
})
// export default Word
