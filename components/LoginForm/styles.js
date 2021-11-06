import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  .container {
    height: 50vh;
    padding: 2rem;
    background-color: ${colors.bgExtra};
  }

  h1 {
    text-align: center;
    font-size: ${size.big};
    color: ${colors.primary};
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }

  input {
    height: 4rem;
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
  }

  button {
    background-color: ${colors.primary};
    border-radius: 1rem;
    border: none;
  }

  span {
    display: inline-block;
    font-size: ${size.normal};
    color: ${colors.secondary};
    padding: 1rem 2rem;
  }
`
