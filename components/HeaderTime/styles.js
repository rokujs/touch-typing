import css from "styled-jsx/css"
import { colors, size } from "s/theme"

export default css`
  ul {
    list-style: none;
    display: flex;
    width: 30rem;
    margin: 0 auto;
    justify-content: space-between;
  }

  button {
    padding: 0.8rem 2rem;
    background-color: transparent;
    border: 2px solid ${colors.textYellow};
    border-radius: 0.5rem;
    cursor: pointer;
  }

  button > span {
    font-size: ${size.normal};
    color: ${colors.textYellow};
    font-weight: 500;
  }
`
