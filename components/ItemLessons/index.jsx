// import Image from 'next/image'
import Link from 'next/link'

import styles from "./styles"

function ItemLessons({ title, description, image, url }) {
  return (
    <>
      <div>
        <picture>
          <img src={image} alt='Image of game' />
        </picture>
        <div className='text'>
          <h3><Link href={url}><a>{title}</a></Link></h3>
          <h5>{description}</h5>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default ItemLessons
