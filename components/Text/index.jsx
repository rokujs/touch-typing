import { colors, size } from 's/theme'

function Text({ paragraph, active, onFocus }) {
  return (
    <>
      <div>
        <span>{paragraph}</span>
      </div>
      <style jsx>{`
        div {
          display: inline-block;
          position: relative;
          width: 1.6rem;
          height: 3rem;
          text-align: center;
          animation-name: ${onFocus ? 'focus' : ''};
          animation-duration: 0.75s;
          animation-iteration-count: infinite;
        }

        span {
          font-size: ${size.normal};
          color: ${active ? colors.primary : colors.text};
          font-weight: bold;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
      <style jsx global>{`
        @keyframes focus {
          0% {
            background-color: ${colors.white};
            border-bottom: 0.5rem solid ${colors.primary};
          }
          50% {
            background-color: ${colors.white}11;
            border-bottom: 0.1rem solid ${colors.primary}11;
          }
          100% {
            background-color: ${colors.white};
            border-bottom: 0.5rem solid ${colors.primary};
          }
        }
      `}</style>
    </>
  )
}

export default Text
