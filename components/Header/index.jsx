import Image from "next/image"
import Link from "next/link"

import Button from "c/Button"
import styles from "./styles"

function Header() {
  return (
    <>
      <header>
        <div className='logo'>
          <Link href='/'>
            <a>
              <Image src='/logo.svg' alt='logo' width={75} height={75} />
            </a>
          </Link>
        </div>
        <nav>
          <div className='navbar'>
            <ul>
              <li>
                <Link href='/statistic'>
                  <a>Stats</a>
                </Link>
              </li>
              <li>
                <Link href='/levels'>
                  <a>Lesson</a>
                </Link>
              </li>
              <li>
                <Link href='/plans'>
                  <a>Plans</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='profile'>
            <div>
              <Button to='/game'>Register</Button>
            </div>
            <div>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <style jsx>{styles}</style>
    </>
  )
}

export default Header
