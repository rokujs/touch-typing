import { useEffect, useState } from "react"

import ItemLessons from "c/ItemLessons"
import getLessons from "services/getLessons"

function GridLessons() {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    getLessons().then(setLessons)
  }, [])
  return lessons.map(({ title, description, image }) => (
    <ItemLessons
      key={title}
      title={title}
      description={description}
      image={image}
      url={`/levels`}
    />
  ))
}

export default GridLessons
