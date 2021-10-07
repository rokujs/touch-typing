import Link from "next/link"
import styles from "./styles"

function Button({ children, to }) {
  return (
    <>
      <div>
        <Link href={to}>
          <a>{children}</a>
        </Link>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Button
