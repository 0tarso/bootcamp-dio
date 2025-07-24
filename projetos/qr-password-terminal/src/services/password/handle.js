import chalk from "chalk"
import { defaultCharacters } from "./utils/default-characters.js"

export async function handler(err, result) {
  if (err) {
    console.log("Error on application")
    return
  }

  let characters = []
  let password = ""
  let passwordLength

  characters = await defaultCharacters()

  const specialCharacters = result.specialCharacters == 1
  passwordLength = result.numberCharacters

  if (specialCharacters) {
    characters.push(..."!@#$%&*()_-+{}^:;>.<,")
  }



  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)

    password += characters[index]
  }

  console.log(chalk.greenBright.bold("Password successfully generated!"))
  console.log("Password >> ", chalk.green(password))

}