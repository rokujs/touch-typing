import css from "styled-jsx/css"
import { colors } from 's/theme'

export default css`
  main {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    max-height: 93vh;
    max-width: 100vw;
    gap: 1rem;
    background-color: ${colors.bg};
  }

  h1 {
    font-size: 3rem;
    width: 80%;
    text-align: left;
    color: ${colors.secondary};
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fit, 200px);
    grid-gap: 2.4rem;
    padding: 3rem;
    width: 70vw;
    height: 70vh;
    background-color: ${colors.primary};
  }
`
