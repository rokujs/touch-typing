// import Image from 'next/image'

import styles from "./styles"

function ItemLevels({ title, description, image }) {
  return (
    <>
      <div>
        <picture>
          <img src={image} alt='Image of game' />
        </picture>
        <div className='text'>
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default ItemLevels
