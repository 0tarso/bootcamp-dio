export async function connectToDatabase(user, password) {
  const userDatabase = process.env.USER_DATABASE;
  const passwordDatabase = process.env.USER_PASSWORD;

  // console.log(userDatabase, passwordDatabase);

  if (user === userDatabase && password === passwordDatabase) {
    console.log("Conectado ao banco de dados!");
  } else {
    console.log("Não foi possível conectar ao banco de dados!");
  }
}