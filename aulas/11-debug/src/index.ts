import { getBaseEmail } from "./services/email"

async function main() {

  const emailContent = await getBaseEmail("tarso")

  console.log(emailContent)
}

main()