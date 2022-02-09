import css from "styled-jsx/css"
import { colors } from "s/theme"

export default css`
  nav {
    padding: 1rem;
  }

  ul {
    list-style: none;
  }

  button {
    fill: ${colors.textYellow};
    background-color: ${colors.primary};
    padding: 1rem;
    box-sizing: content-box;
    border-radius: 50%;
    margin-top: 2rem;
    border-color: ${colors.tertiary};
    border-style: solid;
    border-width: 3px;
    cursor: pointer;
    width: 3.1rem;
    height: 3.1rem;
  }
`
