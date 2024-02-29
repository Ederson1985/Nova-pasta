const opçõesNuméricas = [0,1,2,3,4,5];
const parÍmpar = ["par","ímpar"];
const jogadores = ["usuário","computador"];
const iniciarJogo = quemComeça()
function quemComeça() {
   const quemVaiComeçar = Math.floor(Math.random() * jogadores.length)

//    if (quemVaiComeçar === 0){
//       console.log("O computador vai começar");
      
//   }
  
//   if(quemVaiComeçar === 1){
//      console.log("o usuário vai começar")
//   }  
   return jogadores[quemVaiComeçar]
}

if (iniciarJogo === jogadores[0]){
   console.log("o usuário vai começar");    
   let minhaEscolha = parÍmpar[1]
   console.log(`usuário escolheu ` + minhaEscolha); 

}

if(iniciarJogo === jogadores[1]){
  console.log("O computador vai começar");
  const parOuÍmpar = Math.floor(Math.random() * parÍmpar.length);
  console.log(`computador escolheu ` + parÍmpar[parOuÍmpar]);
  return parÍmpar[parOuÍmpar];
  
}





// verificar porque deu certo agora com o if dentro da função e a comparação sendo feita com 0 e 1 ao invés de usar a função quemComeça() === parÍmpar[quemVaiComeçar] que
// gerava erro antes não seguindo o resultado conforme o que o controlador de fluxo if solicitava 
// achei o erro, o resultado não era satisfatório con o retorno da função porque no controle de fluxo do if eu estava chamando a função mais duas vezes e ela
// novamente executava o trecho de código que continha na sua declaração e por isso os resultados do fluxo eram incoerentes com o retorno da função pois no 
// final eu tinha 3 resultados aleatórios de par ou ímpar.
// PRESTAR ATENÇÃO NA EXCÊNCIA DA ESTRUTURA A SER USADA POIS NÃO ME DEI CONTA QUE SEMPRE AO CHAMAR A FUNÇÃO ELA SEMPRE VAI EXECUTAR O TRECHO DE CÓDIGO DA SUA
// DECLARAÇÃO
// Também funcionou se eu usar no if a variável iniciarJogo pois apesar de ela guardar o resultado de uma função que foi chamada, como ela é uma variável
// ela apenas guarda uma informação, não vai chamar a função que está guardada. Na comparação, a variável parÍmpar[0...1] refere-se ao dado que está guardado
// na posição especificada, ou seja, vai aparecer a informação e não a posição do array mencionado.