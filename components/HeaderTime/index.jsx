import styles from "./styles.js"

export default function HeaderTime() {
  return (
    <>
      <header>
        <ul>
          <li>
            <button>
              <span>Day</span>
            </button>
          </li>
          <li>
            <button>
              <span>Week</span>
            </button>
          </li>
          <li>
            <button>
              <span>Month</span>
            </button>
          </li>
        </ul>
      </header>
      <style jsx>{styles}</style>
    </>
  )
}
