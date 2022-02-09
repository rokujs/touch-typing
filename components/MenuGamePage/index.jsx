import styles from "./styles"
import Repeat from "icons/Repeat"
import Return from "icons/Return"

export default function MenuGamePage() {
  const handleRepeat = () => {
    console.log("Repeat")
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>
              <Return height='25' width='25' />
            </button>
          </li>
          <li>
            <button onClick={handleRepeat}>
              <Repeat height='25' width='25' />
            </button>
          </li>
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  )
}
