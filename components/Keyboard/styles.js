import css from 'styled-jsx/css'

export default css`
  div {
    display: grid;
    grid-template-columns: minmax(120px, 2fr) repeat(12, 1fr) minmax(120px, 2fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;
    min-height: 100%;
  }
`