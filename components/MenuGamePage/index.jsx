import { useState } from "react"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"

import { reset } from "reducers/gameReducer"

import styles from "./styles"
import Repeat from "icons/Repeat"
import Return from "icons/Return"

function MenuGamePage() {
  const [click, setClick] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleClickRepeat = () => {
    if (click) dispatch(reset())
    setClick(false)
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
            <button
              onMouseEnter={() => setClick(true)}
              onClick={handleClickRepeat}
            >
              <Repeat height='25' width='25' />
            </button>
          </li>
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  )
}

export default MenuGamePage
