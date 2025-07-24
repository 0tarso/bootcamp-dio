import chalk from "chalk";

const linkDescriptionTitle = chalk.bgGray.whiteBright.bold(">>  Enter the content for QRCode  <<")

const linkDescriptionContent = chalk.green(`>>`)

const linkDescriptionFullText = `
${linkDescriptionTitle}
${linkDescriptionContent}`


const typeDescriptionTitle = chalk.bgGray.whiteBright.bold(">>  Choose the type  <<")
const typeDescriptionContent = chalk.green(` 1- Normal \n 2- Terminal \n>>`)

const typeDescriptionFullText = `
${typeDescriptionTitle}
${typeDescriptionContent}`

export const PromptSchemaQRcode = [
  {
    name: "link",
    description: linkDescriptionFullText,

  },
  {
    name: "type",
    description: typeDescriptionFullText,
    pattern: /^[1-2]+$/,
    message: chalk.red("Choose 1 or 2"),
  }
]