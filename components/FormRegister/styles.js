import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  .container {
    padding: 2rem;
    background-color: ${colors.bgExtra};
  }

  h1 {
    text-align: center;
    font-size: ${size.big};
    color: ${colors.primary};
    margin-bottom: 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
  }

  label > span {
    font-size: ${size.small};
    color: ${colors.primary};
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input {
    height: 4rem;
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  button {
    background-color: ${colors.primary};
    border-radius: 1rem;
    border: none;
  }

  button > span {
    display: inline-block;
    font-size: ${size.normal};
    color: ${colors.secondary};
    padding: 1rem 2rem;
  }

  .login {
    font-size: ${size.small};
    color: ${colors.primary};
  }

  .login > a {
    color: ${colors.tertiary};
    font-weight: bold;
    text-decoration: none;
  }

  .login > a:hover {
    text-decoration: underline;
  }
`
