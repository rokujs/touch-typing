import HeaderTime from "c/HeaderTime"
import Time from "c/Time"
import { colors, size } from "s/theme"

export default function StatsTime({ stats }) {
  const { day, week, month } = stats
  return (
    <>
      <div>
        <h5>Time</h5>
        <div className='container'>
          <HeaderTime />
          <Time minutes={day} />
        </div>
      </div>
      <style jsx>{`
        h5 {
          color: ${colors.secondary};
          font-size: ${size.big};
        }

        .container {
          margin-top: 1.4rem;
        }
      `}</style>
    </>
  )
}
