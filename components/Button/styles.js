import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  a {
    display: inline-block;
    font-size: ${size.normal};
    color: ${colors.primary};
    padding: 1rem 2rem;
  }

  div {
    background-color: ${colors.secondary};
    border-radius: 1rem;
  }
`
