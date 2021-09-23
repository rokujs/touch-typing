import css from "styled-jsx/css"

export default css`
  div {
    display: inline-block;
    background-color: #ccc;
    text-align: center;
    padding: 2rem;
    border-radius: 1rem;
  }

  span {
    font-size: 1.8rem;
  }

  .enter {
    grid-row: 2 / 4;
    grid-column-start: 14;
  }

  .shift {
    grid-row: 4;
    grid-column: 13/15;
  }

  .space {
    grid-row: 5;
    grid-column: 4 / 10;
  }
`
