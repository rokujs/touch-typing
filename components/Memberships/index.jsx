import styles from "./styles"

function Memberships() {
  return (
    <>
      <section>
        <h2>Premium plan</h2>
        <p>
          Increase the lines of clean code in your projects, change to the
          premium plan and get our different benefits.
        </p>

        <article className='prices'>
          <form>
            <div>
              <label>
                <input type='radio' name='membership' value='Monthly' />
                <span>Premiun Monthly</span>
                <p>
                  <span className='mouth'>💲7.99</span> per Mouth
                </p>
              </label>
              <label>
                <input type='radio' name='membership' value='Annually' />
                <span>Premiun Annually</span>
                <p>
                  <span className='year'>💲4.75</span> per Mouth (Billed
                  annually 💲57)
                </p>
              </label>
            </div>
            <button>Prueba una semana de prueba gratis</button>
          </form>
        </article>

        <hr />

        <article className='benefits'>
          <h3>Beneficios</h3>
          <ul>
            <li>Sin publicidad</li>
            <li>Todas las estadisticas</li>
            <li>Más historiás</li>
            <li>Skins exclusivas</li>
            <li>Más temas</li>
          </ul>
        </article>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}

export default Memberships
