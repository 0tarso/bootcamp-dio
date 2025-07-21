import { connectToDatabase, disconnectFromDatabase } from "./utils/database.js";


async function main() {
  await connectToDatabase("myDatabase");
  await disconnectFromDatabase();
}

main();