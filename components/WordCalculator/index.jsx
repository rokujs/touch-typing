import { useState } from "react"

import styles from "./styles"

export default function WordCalculator({ minutes, average = 100, word }) {
  const [ppm, setPpm] = useState(0)
  return (
    <>
      <div>
        <div>
          <h6>speed</h6>
          <span className="ppm">{ppm}</span>
          <small>ppm</small>
        </div>
        <div>
        <h6>Accuracy</h6>
          <span className="average">{average}</span>
          <small>%</small>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
