import css from "styled-jsx/css"
import { colors } from 's/theme'

export default css`
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${colors.bg};
    padding: 3rem 25rem;
    min-height: 93vh;
    max-width: 100vw;
    gap: 5rem;
  }

  main > div {
    background-color: #fff;
  }

  .speed {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .time {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .progress {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
`
