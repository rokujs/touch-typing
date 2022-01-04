import styles from "./styles.js"

export default function StatsSpeed({ stats }) {
  console.log("speed", stats)
  return (
    <>
      <div>
        <h5>Speed</h5>
        <div className="description">
          <p>Estas son tus estadísticas de velocidad, se tienen en cuenta todas tus partidas terminadas para sacar el puntaje.</p>
        </div>
        <div className="stats">
          <ul>
            <li>
              Average:<span>{stats.average}</span>
            </li>
            <li>
              Max:<span>{stats.max}</span>
            </li>
            <li>
              Min:<span>{stats.min}</span>
            </li>
            <li>
              Symbols:<span>{stats.symbols}</span>
            </li>
            <li>
              LowerCase:<span>{stats.lowercase}</span>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
