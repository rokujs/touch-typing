import styles from "./styles.js"

import StatsProgress from "c/StatsProgress"
import StatsSpeed from "c/StatsSpeed"
import StatsTime from "c/StatsTime"

function LayoutStats({ speed, time, progress }) {
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
