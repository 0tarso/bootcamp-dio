import chalk from "chalk";

const descriptionTitle = chalk.bgGray.whiteBright.bold(">>  Choose the tool  <<")

const descriptionContent = chalk.green(` 1- QRcode \n 2- Passoword \n>>`)

const descriptionFullText = `
${descriptionTitle}
${descriptionContent}`

export const PromptSchemaMain = [
  {
    name: "select",
    description: descriptionFullText,
    pattern: /^[1-2]+$/,
    message: chalk.red("Opção inválida. Digite 1 para QRcode ou 2 para Password."),
    required: true,
  }
]