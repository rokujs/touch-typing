import { useRouter } from "next/router"
import { useDispatch } from "react-redux"

import { resetLevel } from "reducers/textInfoReducer"

import styles from "./styles"
import Repeat from "icons/Repeat"
import Return from "icons/Return"

export default function MenuGamePage() {
  const router = useRouter()
  const dispatch = useDispatch()

  const handleRepeat = () => {
    dispatch(resetLevel())
  }
  const handleReturn = () => {
    router.push("/levels")
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={handleReturn}>
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
