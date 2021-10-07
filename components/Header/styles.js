import css from "styled-jsx/css"
import { colors, size } from 's/theme'

export default css`
  header {
    display: flex;
    justify-content: space-between;
    align-content:center;
    align-items: center;
    background-color: ${colors.tertiary};
    width: 100vw;
    height: 7vh;
    padding: 0 5rem;
  }

  nav > div {
    display: inline-block;
  }

  .navbar {
    margin-right: 10px;
    border-right: 2px solid #ccc;
  }

  .navbar > ul {
    list-style: none;
    text-align: center;
  }

  .navbar > ul > li {
    display: inline-block;
    padding: 0 10px;
    font-size: ${size.normal};
    font-weight: 500;
    color: ${colors.text};
  }

  .profile {
  }

  .profile > div {
    display: inline-block;
    margin-left: 2rem;
    font-size: ${size.normal};
    color: ${colors.text};
  }

  a:hover {
    text-decoration: underline;
  }
`
