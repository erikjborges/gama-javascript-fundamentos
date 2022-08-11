

// Receber os ingredientes
let vasilha_1;
vasilha_1 = "chocolate"; // atribuição de valores a variáveis
let vasilha_2 = "500ml de leite";
let vasilha_3 = "3 ovos";
let vasilha_4 = "5 colheres de farinha";

console.log("---- Variáveis -----");
console.log(vasilha_1);
console.log(vasilha_2);
console.log(vasilha_3);
console.log(vasilha_4);

// Misturar a massa
// Concatenação de variáveis
let vasilha_mistura = vasilha_1 + " - " + vasilha_2 + " - " + vasilha_3 + " - " + vasilha_4;

console.log("---- Vasilha Mistura -----");
console.log(vasilha_mistura);

let tabuleiro;
tabuleiro = "manteiga";
// Atribuição concatenando
tabuleiro += " - " + vasilha_mistura;

console.log("---- Tabuleiro -----");
console.log(tabuleiro);

// Colocar no forno
tabuleiro = "Bolo de " + tabuleiro;

console.log("---- Forno -----");
console.log(tabuleiro);

// Confeitar (feito pelo usuário)