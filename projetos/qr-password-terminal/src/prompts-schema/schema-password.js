import chalk from "chalk";

const charDescriptionTitle = chalk.bgGray.whiteBright.bold(">>  Number of characters (1 - 12)  <<")
const charDescriptionContent = chalk.green(`>>`)

const charDescriptionFullText = `
${charDescriptionTitle}
${charDescriptionContent}`


const specialCharDescriptionTitle = chalk.bgGray.whiteBright.bold(">>  Allow special characters?  <<")
const specialCharDescriptionContent = chalk.green(` 1- Yes \n 2- No \n>>`)

const specialCharDescriptionFullText = `
${specialCharDescriptionTitle}
${specialCharDescriptionContent}`

export const PromptSchemaPassword = [
  {
    name: "numberCharacters",
    description: charDescriptionFullText,
    pattern: /^(1[0-2]|[1-9])$/,
    message: chalk.red("Wrong number of characters"),
    required: true

  },
  {
    name: "specialCharacters",
    description: specialCharDescriptionFullText,
    pattern: /^[1-2]+$/,
    message: chalk.red("Choose 1 or 2"),
    required: true
  }
]