import css from "styled-jsx/css"
import { colors } from 's/theme'

export default css`
  main {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
    max-height: 93vh;
    max-width: 100vw;
    gap: 3vw;
    background-color: ${colors.bg};
  }
`
