import Link from "next/link"
import Image from "next/image"

import Star from "icons/Star"
import { colors, size } from "s/theme"

function ItemLevel({ level, title, image, completed, points, perfect, url }) {
  return (
    <>
      <Link href={url}>
        <a>
          <article>
            <picture className='img'>
              <Image
                src={image}
                width='240'
                height='230'
                alt='Image of level'
              />
            </picture>
            <div className='text'>
              <h6>
                <span>{level}.</span>
                {title}
                {perfect && (
                  <span>
                    <Star height='25' width='25' />
                  </span>
                )}
              </h6>
            </div>
            <div className='points'>
              <p>{points}</p>
            </div>
          </article>
        </a>
      </Link>
      <style jsx>{`
        article {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        picture {
          width: inherit;
          height: inherit;
        }

        .img {
          filter: grayscale(${completed ? 0 : 100}%);
        }

        .text {
          padding-top: 0.8rem;
          padding-left: 0.8rem;
          paddign-right: 0.5rem;
          padding-bottom: 1rem;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: ${colors.bgExtra}aa;
          min-height: 3rem;
          max-height: 6rem;
        }

        .text > h6 {
          text-align: left;
          color: ${colors.text};
          font-size: ${size.normal};
        }

        .text > h6 > span {
          display: inline-block;
          margin-left: 0.5rem;
        }

        .text > h6 > span:first-child {
          display: inline-block;
          margin-right: 0.5rem;
        }

        .points {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          text-align: center;
          background: ${colors.tertiary}aa;
          height: 3rem;
        }

        .points > p {
          color: ${colors.text};
          font-size: ${size.normal};
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

export default ItemLevel
