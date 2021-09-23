import { useState, useEffect } from "react"

import getText from "services/getText"
import Text from "c/Text"

function ViewText() {
  const [newParagraph, setNewParagraph] = useState([])

  useEffect(() => {
    getText().then(setNewParagraph)
  }, [])
  return (
    <>
      {newParagraph.map((itemParagraph, index) => (
        <Text key={index} paragraph={itemParagraph} />
      ))}
    </>
  )
}

export default ViewText
