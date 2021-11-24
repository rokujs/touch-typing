import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  h2 {
    font-size: ${size.big};
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${size.normal};
  }

  article {
    margin: 2rem 0;
  }

  .prices {
    background-color: #eeeeeeaa;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 2rem 4rem;
  }

  form > div {
    margin-left: 2rem;
  }

  label {
    font-size: ${size.normal};
    display: block;
    padding: 2rem;
  }

  label > input {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  label > span {
    font-size: ${size.normal};
    font-weight: 700;
  }

  label > p > .mouth {
    color: ${colors.primary};
    font-weight: 600;
  }

  label > p > .year {
    color: ${colors.tertiary};
    font-weight: 600;
  }

  button {
    display: block;
    padding: 1rem;
    font-size: ${size.big};
    color: ${colors.secondary};
    padding: 1rem 2rem;
    background-color: ${colors.primary};
    border-radius: 1rem;
    border: none;
    margin: 3rem auto;
    font-weight: 500;
  }

  hr {
    margin: 3rem 4rem;
    border: none;
    border-top: 1px solid ${colors.primary};
  }

  h3 {
    font-size: ${size.big};
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
  }

  li {
    background-color: ${colors.tertiary};
    padding: 1rem;
    font-size: ${size.normal};
    color: ${colors.textYellow};
    border-radius: 1rem;
  }

  section {
    background-color: ${colors.bgExtra};
    padding: 5rem;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
  }
`
