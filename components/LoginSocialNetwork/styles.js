import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  ul {
    padding: 1rem;
    list-style: none;
    border-bottom: 1px solid ${colors.primary};
  }

  li {
    display: block;
    margin-bottom: 1rem;
  }

  li > a {
    background-color: ${colors.white};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.5rem;
    padding: 1rem;
    color: ${colors.bg};
    font-size: ${size.normal};
    cursor: pointer;
  }

  li > a > svg {
    margin-right: 0.8rem;
    width: ${size.big};
    height: ${size.big};
  }

  .bold {
    font-weight: bold;
  }
`
