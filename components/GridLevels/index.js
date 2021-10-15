import { useEffect, useState } from "react"

import ItemLevels from "c/ItemLevels"
import getLevels from "services/getLevels"

function GridLevels() {
  const [levels, setLevels] = useState([])

  useEffect(() => {
    getLevels().then(setLevels)
  }, [])
  return levels.map(({ title, description, image }) => (
    <ItemLevels
      key={title}
      title={title}
      description={description}
      image={image}
    />
  ))
}

export default GridLevels
