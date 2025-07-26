export async function getBaseEmail(senderName: string): Promise<string> {

  let base = await getHeaderEmail()

  base += `Olá ${senderName}, gostaria de me inscrever na vaga`

  base += "\n estou deixando o meu currículo"

  return base
}

export async function getHeaderEmail(): Promise<string> {
  return "NOVO EMAIL!\n"
}