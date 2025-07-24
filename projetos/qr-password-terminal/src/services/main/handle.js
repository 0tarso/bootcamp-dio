import chalk from "chalk";
import { createQrCode } from "../qr-code/create.js";
import { createPassword } from "../password/create.js";

export async function handler(err, choose) {
  if (err) return console.log(chalk.red("Error on application"))

  if (choose.select == 1) await createQrCode()
  if (choose.select == 2) await createPassword();
}