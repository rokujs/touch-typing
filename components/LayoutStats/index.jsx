import styles from "./styles.js"

import StatsProgress from "c/StatsProgress/index.js"
import StatsSpeed from "c/StatsSpeed/index.js"
import StatsTime from "c/StatsTime/index.js"

function LayoutStats({ speed, time, progress}) {
  return (
    <>
      <main>
        <div className='speed'>
          <StatsSpeed stats={speed} />
        </div>
        <div className='time'>
          <StatsTime stats={time} />
        </div>
        <div className='progress'>
          <StatsProgress stats={progress} />
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}

export default LayoutStats
