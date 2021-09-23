const TEXT =
  "Mientras caminaba por el bosque, un lobo la vigilaba escondido entre unos matorrales, era un lobo muy grande y feroz, y tenía una boca muy grande, con la que podía comerse a Caperucita Roja, pero no se atrevió a hacerlo, debido a que unos leñadores estaban trabajando en el bosque."

export default async function getText() {
  const arrayText = TEXT.split('')
  return arrayText
}
