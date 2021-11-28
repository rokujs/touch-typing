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

  h1 {
    margin: 2rem 0;
    font-size: 3rem;
    text-align: center;
  }

  section {
    max-height: 80vh;
    max-width: 70vw;
    padding: 3rem;
    background-color: ${colors.primary};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3rem;
  }

  nav {
    padding: 0 2rem;
    min-height: 80vh;
    min-width: 20vw;
    background-color: ${colors.textYellow};
  }
`
