// const player1 = {
//   name: "Mario",
//   velocity: 4,
//   handling: 3,
//   power: 3,
//   score: 0
// }

// const player2 = {
//   name: "Luigi",
//   velocity: 3,
//   handling: 4,
//   power: 4,
//   score: 0
// }


const players = [
  { name: "Mario", velocity: 4, handling: 3, power: 3, score: 0 },
  { name: "Peach", velocity: 3, handling: 4, power: 2, score: 0 },
  { name: "Yoshi", velocity: 2, handling: 4, power: 3, score: 0 },
  { name: "Luigi", velocity: 3, handling: 4, power: 2, score: 0 },
  { name: "Bowser", velocity: 5, handling: 2, power: 5, score: 0 },
  { name: "Donkey Kong", velocity: 2, handling: 2, power: 5, score: 0 },
]

let player1
let player2


async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function showAnimationText(title) {
  console.log(">>", title)

  let consoleTextAnimation = ""
  for (let i = 0; i < 4; i++) {
    await new Promise(resolve => setTimeout(resolve, 500));
    consoleTextAnimation = consoleTextAnimation + "."

    console.log(consoleTextAnimation)
  }
}

async function getRandomPlayer() {
  let playerIndex1 = (await rollDice() - 1)
  let playerIndex2 = (await rollDice() - 1)

  while (playerIndex1 === playerIndex2) {
    playerIndex2 = (await rollDice() - 1)
  }

  player1 = players[playerIndex1]
  player2 = players[playerIndex2]

  await showAnimationText("Escolhendo players")

}




async function getRandomBlock() {

  let random = Math.random()
  let randomBlock

  switch (true) {
    case random < 0.33:
      randomBlock = "RETA"
      break;

    case random < 0.66:
      randomBlock = "CURVA"
      break;


    default:
      randomBlock = "CONFRONTO"
      break;
  }

  return randomBlock
}


async function playRaceEngine(character1, character2) {

  // Definindo a quantidade de rounds
  let maxRound = 5

  for (let round = 1; round <= maxRound; round++) {

    await showAnimationText(`⌚ Rodada ${round}`)
    // console.log(`\n⌚>> Rodada ${round} `)

    let block = await getRandomBlock()
    console.log(` Bloco -> ${block}`)


    // Rolar os dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()


    // Teste habilidade
    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.velocity
      totalTestSkill2 = diceResult2 + character2.velocity

      await logRollResult(character1.name, "Velocidade->", diceResult1, character1.velocity)
      await logRollResult(character2.name, "Velocidade->", diceResult2, character2.velocity)
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.handling
      totalTestSkill2 = diceResult2 + character2.handling

      await logRollResult(character1.name, "Manobrabilidade->", diceResult1, character1.handling)
      await logRollResult(character2.name, "Manobrabilidade->", diceResult2, character2.handling)
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.power;
      let powerResult2 = diceResult2 + character2.power;

      console.log(`${character1.name} confrontou com ${character2.name}! 🥊`);

      await logRollResult(
        character1.name,
        "Poder",
        diceResult1,
        character1.power
      );

      await logRollResult(
        character2.name,
        "Poder",
        diceResult2,
        character2.power
      );

      if (powerResult1 > powerResult2 && character2.score > 0) {
        console.log(
          `${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto 🐢`
        );
        character2.score--;
      }

      if (powerResult2 > powerResult1 && character1.score > 0) {
        console.log(
          `${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto 🐢`
        );
        character1.score--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }


    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.name} marcou 1 ponto!\n`)
      character1.score++
    }

    else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.name} marcou 1 ponto!\n`)
      character2.score++
    }
    // else (
    //   console.log("Ninguém marcou pontos")
    // )
  }

}


async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}


async function declareWinner(character1, character2) {
  console.log("\n ======= Resultado Final =========")

  console.log(`>> ${character1.name}: ${character1.score} ponto(s)`)
  console.log(`>> ${character2.name}: ${character2.score} ponto(s)`)

  if (character1.score > character2.score) {
    console.log(``)
    console.log(`${character1.name} é o campeão!🚀`)
  }

  else if (character2.score > character1.score) {
    console.log(`${character2.name} é o campeão!🚀`)
  }

  else {
    console.log("\n --- Corrida terminou em empate ---")
  }
}

// Função main utilizando o auto invoke ()=>{}()
(
  async function main() {
    await getRandomPlayer()

    console.log("🚨Vamos correr!🚨 \n")
    console.log(`🏁 ${player1.name} x ${player2.name} \n`)

    await playRaceEngine(player1, player2)

    await declareWinner(player1, player2)
  })();

