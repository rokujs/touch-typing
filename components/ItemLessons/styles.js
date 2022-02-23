import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  div {
    background-color: ${colors.tertiary};
  }

  h3 {
    font-size: ${size.big};
    color: ${colors.textYellow};
  }

  h3 > a:hover {
    text-decoration: underline;
  }

  h5 {
    font-size: ${size.normal};
    color: ${colors.text};
  }

  .text {
    padding: 1rem 2rem;
  }
`
