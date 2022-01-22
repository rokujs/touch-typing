import css from "styled-jsx/css"
import { colors } from "s/theme"

export default css`
  main {
    min-height: 100vh;
    max-width: 100vw;
    background-color: ${colors.bg};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  section {
    height: 46vh;
  }

  .view {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .text {
    width: 60vw;
    height: 100%;
    border-radius: 3rem;
    background-color: ${colors.bgExtra};
    padding: 2rem 3rem;
  }

  .word {
    background-color: ${colors.tertiary};
    margin-top: 5rem;
    padding: 2.6rem;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .keyboard {
    width: 96vw;
    border-radius: 3rem;
    background-color: ${colors.bgExtra};
    padding: 2rem 3rem;
  }
`
