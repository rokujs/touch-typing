import styles from "./styles"
import Keyboard from "c/Keyboard"

export default function StatsProgress({ stats }) {
  return (
    <>
      <div>
        <Keyboard
          info={true}
          speed={stats.speedCharacter}
          time={stats.timeCharacter}
          accuracy={stats.accuracyCharacter}
        />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
