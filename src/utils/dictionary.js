import dictionary from "../scripts/data/wordle-eng.txt"

export const isProper = (word) => dictionary.includes(word)

export const getRandomWord = () => {
  const index = Math.floor(Math.random() * dictionary.length)
  return dictionary[index]
}