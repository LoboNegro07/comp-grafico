alert('Boas vindas ao jogo do número secreto');  //Da boas vindas ao jogador
let numeroMaximo = 1000000;  //Define o número maximo que pode ser digitado no jogo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);  //Escolhe um número aleatório para ser o certo
console.log(numeroSecreto);
let chute;  //Tentativa de descobrir o número
let tentativas = 1;  //Contabiliza cada tentativa

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {   //gera o looping do jogo
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);  //
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {  //gera a tentativa de chute
        break;
    } else {
        if (chute > numeroSecreto) {  //mensagem que aparece quando vode erra o chute
            alert(`O número secreto é menor que ${chute}`); //se o numero for menor que o chute
        } else {
            alert(`O número secreto é maior que ${chute}`); //se o numero for maior que o chute
        }
        // tentativas = tentativas + 1;
        tentativas++;  //atribui as tentativas ao looping
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';   //faz o looping funcionar
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
