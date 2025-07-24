export async function defaultCharacters() {
  const defaultChars = []

  if (process.env.UPPERCASE_LETTERS === "true") {
    defaultChars.push(..."ABCDEFGHIJKLMNOPQRSTUVXWYZ")
  }

  if (process.env.LOWERCASE_LETTERS === "true") {
    defaultChars.push(..."abcdefghijklmnopqrstuvxwyz")
  }

  if (process.env.NUMBERS === "true") {
    defaultChars.push(..."1234567890")
  }

  return defaultChars
}
