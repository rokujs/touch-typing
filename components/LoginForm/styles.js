import css from "styled-jsx/css"
import { colors, size } from "s/theme"

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
    height: 30vh;
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

  .register {
    font-size: ${size.small};
    color: ${colors.primary};
  }

  .register > a {
    color: ${colors.tertiary};
    font-weight: bold;
    text-decoration: none;
  }

  .register > a:hover {
    text-decoration: underline;
  }
`
