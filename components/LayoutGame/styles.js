import css from 'styled-jsx/css'
import { colors } from 's/theme'

export default css`
  main {
    min-height: 100vh;
    max-width: 100vw;
    background-color: ${colors.bg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  section {
    height: 46vh;
    width: 96vw;
    border-radius: 3rem;
    background-color: ${colors.bgExtra};
    padding: 2rem 3rem;
  }

  .text {
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
  }
`