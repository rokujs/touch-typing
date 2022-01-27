const TEXT =
  "Mientras caminaba por"

export default async function getText() {
  const arrayText = TEXT.split(" ").map(item => item + " ")
  arrayText[arrayText.length - 1] = arrayText[arrayText.length - 1].slice(0, -1)
  const arrayWords = arrayText.map(item => item.split(""))
  return arrayWords
}
