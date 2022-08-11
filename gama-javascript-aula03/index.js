
// String
let container_verde = "Texto";
console.log("container_verde: " + typeof(container_verde));
// Inteiro
let container_azul = 10;
console.log("container_azul: " + typeof(container_azul));
let container_azulescuro = -10;
console.log("container_azulescuro: " + typeof(container_azulescuro));
// Float
let container_branco = 1.25;
console.log("container_branco: " + typeof(container_branco));
// Boolean
let container_amarelo = true; // 1 ou verdadeiro
console.log("container_amarelo: " + typeof(container_amarelo));
let container_amareloclaro = false; // 0 ou falso
console.log("container_amareloclaro: " + typeof(container_amareloclaro));

// Array
let navio = [];

navio[0] = container_verde;
navio.push(container_azul);
navio.push(container_azulescuro);
navio.push(container_branco);
navio.push(container_amarelo);
navio.push(container_amareloclaro);

console.log("Navio: " + typeof(navio));

// Objeto
let carro = {};
carro = {
    cor: "preto",
    marca: "ford",
    modelo: "focus",
    ano: "2009"
};
console.log("Carro: " + typeof(carro));

navio.push(carro);

// Null
container_azulescuro = null;
console.log("container_azulescuro: " + typeof(container_azulescuro));

// Undefined
let container_preto;
console.log("container_preto: " + typeof(container_preto));

// navio.push(container_preto);

// Array

console.log("Navio: " + navio);
console.log("Carro: ");
console.log(navio[6]);

let focus = navio.pop();

console.log("Navio: " + navio);
console.log("Focus: ");
console.log(focus);

// Objeto
console.log("Focus Ano: ");
console.log(focus.ano);

focus.placa = 'XXX-XXXX';

console.log("Focus: ");
console.log(focus);

focus.ano = "2010";

console.log("Focus Ano: ");
console.log(focus.ano);