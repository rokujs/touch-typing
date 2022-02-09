import { useRouter } from 'next/router';
;


import styles from "./styles"
import Repeat from "icons/Repeat"
import Return from "icons/Return"

export default function MenuGamePage() {
  const router = useRouter();

  const handleRepeat = () => {
    console.log("Repeat")
  }
  const handleReturn = () => {
    router.push('/levels')
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
