import { useSelector } from "react-redux"

import { textInfoSelector } from "reducers/textInfoReducer"

import styles from "./styles"

export default function WordCalculator() {
  const textInfo = useSelector(textInfoSelector)

  return (
    <>
      <div>
        <div>
          <h6>speed</h6>
          <span className='ppm'>{textInfo.ppm}</span>
          <small>ppm</small>
        </div>
        <div>
          <h6>Accuracy</h6>
          <span className='average'>{textInfo.average}</span>
          <small>%</small>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
