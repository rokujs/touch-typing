import styles from "./styles"

export default function HeaderTime({ minutes }) {
  return (
    <>
      <div className="container">
        <svg>
          <circle cx="200" cy="200" r="94"/>
          <circle cx="200" cy="200" r="94"/>
        </svg>
          <div className='circle'>
            <span>{minutes}<small>min</small></span>
          </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
