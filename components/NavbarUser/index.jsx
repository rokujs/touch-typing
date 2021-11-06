import FormLogin from 'c/LoginForm'
import React from 'react'
import styles from './styles'

function navbarUser() {
  return (
    <>
      <div>
        <FormLogin />
      </div>
      <style jsx>
        {styles}
      </style>
    </>
  )
}

export default navbarUser
