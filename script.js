/*
Você está trabalhando nos bastidores do Maraton Kenzie. Não tem mais hipóteses do cenário mudar além dos três que já lideram a prova, a distância para o quarto colocado já é enorme. Rafael, Manoel e Daniel estão em uma disputa acirrada para conquistar a primeira posição. Daniel tem vantagem, pois, no percurso, conseguiu cumprir a tarefa extra. Desenvolva a função para criarmos o pódio.

Crie uma função chamada positions, esta função deverá receber como argumento 3 parâmetros; firstPlace, secondPlace, lastPlace
Você deverá criar uma array composto pelo, os três parâmetros recebidos pela função. A posição em que o parâmetro é inserido no array, é considerado a posição do atleta na corrida.

O competidor Daniel realizou o desafio extra, e ganhou um bônus. Ele sempre vai subir uma posição. Sendo assim, o Daniel trocará de lugar com quem estiver na posição a frente dele, caso haja.

Após realizar esta rotina a função deverá imprimir no console o resultado. Deverá seguir o seguinte modelo: 1ª - Colocado "nomeDoCompetidor". Queremos saber a posição de todos os 3 primeiros colocados.
*/

console.log("teste");

function positions(firstPlace, secondPlace, lastPlace) {
  let array = [firstPlace, secondPlace, lastPlace];

  //verificação
  if (array[0] == "Daniel") {
    return console.log(
      `1º - Colocado ${array[0]} ; 2º - Colocado ${array[1]} ; 3º - Colocado ${array[2]};`
    );
  } else if (array[1] == "Daniel") {
    return console.log(
      `1º - Colocado ${array[1]} ; 2º - Colocado ${array[0]} ; 3º - Colocado ${array[2]};`
    );
  } else {
    return console.log(
      `1º - Colocado ${array[0]} ; 2º - Colocado ${array[2]} ; 3º - Colocado ${array[1]};`
    );
  }
}

/* teste 1 */
console.log(positions("Daniel", "Rafael", "Manoel"));

/* teste 2 */
console.log(positions("Rafael", "Daniel", "Manoel"));

/* teste 3 */
console.log(positions("Rafael", "Manoel", "Daniel"));
