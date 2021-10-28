import { colors, size } from 's/theme'

function ItemLevel({ title, image, completed, points, perfect }) {
  return (
    <>
      <article>
        <picture>
          <img src={image} alt='Image of level' />
        </picture>
        <div className='text'>
          <h6>{title}</h6>
        </div>
        <div className='points'>
          {perfect && <p>Perfecto:</p>}
          <p>{points}</p>
        </div>
      </article>
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

        picture img {
          height: 100%;
          width: 100%;
          position: absolute;
          object-fit: cover;
          z-index: -1;
          filter: grayscale(${completed ? 0 : 100}%);
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: ${colors.bgExtra}aa;
          min-height: 3rem;
        }

        .text > h6 {
          text-align: center;
          color: ${colors.text};
          font-size: ${size.normal};
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
