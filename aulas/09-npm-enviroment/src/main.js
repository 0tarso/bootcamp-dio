import { connectToDatabase } from "./database/date.js";


async function main() {
  await connectToDatabase("McDonalds", "12345");

  // console.log(process.env.USER_DATABASE);

}

main()