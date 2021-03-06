import React, { useState, useEffect } from "react"
import { colors, size } from "s/theme"

function Text({ character, active, onFocus, failed, reset }) {
  const [wasFailed, setWasFailed] = useState(false)


  useEffect(() => {
    setWasFailed(false)
  }, [reset])

  useEffect(() => {
    if (onFocus && !failed) {
      setWasFailed(true)
    }
  }, [failed])
  return (
    <>
      <div className={`character ${wasFailed ? "failed" : ""}`}>
        <span>{character}</span>
      </div>
      <style jsx>{`
        .failed {
          border-bottom: 0.5rem solid ${colors.error};
        }

        .character {
          display: inline-block;
          position: relative;
          width: 1.6rem;
          height: 3rem;
          text-align: center;
          animation-name: ${onFocus ? "focus" : ""};
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
            background-color: ${failed ? colors.white : colors.error};
            border-bottom: 0.5rem solid ${colors.primary};
          }
          50% {
            background-color: ${failed ? colors.white : colors.error}11;
            border-bottom: 0.1rem solid ${colors.primary}11;
          }
          100% {
            background-color: ${failed ? colors.white : colors.error};
            border-bottom: 0.5rem solid ${colors.primary};
          }
        }
      `}</style>
    </>
  )
}

export default React.memo(Text, (prevProps, nextProps) => {
  return (
    prevProps.active === nextProps.active &&
    nextProps.onFocus === prevProps.onFocus &&
    nextProps.failed === prevProps.failed &&
    prevProps.reset === nextProps.reset
  )
})

// export default Text
