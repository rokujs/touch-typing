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
                  <a>Statistic</a>
                </Link>
              </li>
              <li>
                <Link href='/lesson'>
                  <a>Lesson</a>
                </Link>
              </li>
              <li>
                <Link href='/programming'>
                  <a>Language programming</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='profile'>
            <div>
              <Button to='/game'>Register</Button>
            </div>
            <div>
              <Link href='/game'>
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
