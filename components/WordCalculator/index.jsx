import { useState } from "react"

import styles from "./styles"

export default function WordCalculator({ minutes, average, word }) {
  const [ppm, setPpm] = useState(0)
  return (
    <>
      <div>
        <div>
          <span className="ppm">{ppm}</span>
          <small>ppm</small>
        </div>
        <div>
          <span className="average">{average}%</span>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
