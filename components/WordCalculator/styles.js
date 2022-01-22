import css from "styled-jsx/css"
import { colors, size } from "s/theme"

export default css`
  div > div:first-child {
    margin-bottom: 1rem;
  }
  h6 {
    font-size: ${size.small};
    font-style: italic;
    color: ${colors.secondary};
  }

  span {
    color: ${colors.text};
  }

  small {
    font-size: ${size.small};
    margin-left: 0.5rem;
    color: ${colors.textYellow};
  }
  .ppm {
    font-size: ${size.big};
  }

  .average {
    font-size: ${size.normal};
  }
`
