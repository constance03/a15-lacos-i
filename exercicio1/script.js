// Utilizando o laço while, escreva um código que recebe um prompt perguntando se a pessoa deseja comer mais coxinhas.
// “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma let conta para guardar o valor total.
// Toda vez que a resposta for sim, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total.
//Quando a resposta não for sim, devemos imprimir o valor total da conta.
let coxinha = prompt("quer mais coxinha?").toUpperCase()
let conta = 0

while (coxinha === "S") {
    coxinha = prompt("quer mais coxinha?").toUpperCase()
    conta += 2.5
}
console.log("Total da conta: " + conta);