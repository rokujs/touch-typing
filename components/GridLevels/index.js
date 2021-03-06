import { useEffect, useState } from "react"

import ItemLevel from 'c/ItemLevel'
import getLevels from "services/getLevels"

function GridLevels() {
  const [levels, setLevels] = useState([])

  useEffect(() => {
    getLevels().then(setLevels)
  }, [])

  return levels.map(({ level, title, image, completed, points, perfect }) => (
    <ItemLevel
      key={title}
      title={title}
      image={image}
      completed={completed}
      points={points}
      perfect={perfect}
      level={level}
      url={`/game`}
    />
  ))
}


export default GridLevels
