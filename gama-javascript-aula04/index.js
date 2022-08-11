
// x = (a + b - c) / d * e
// se x for par soma 1, senão substrai 1

// Definindo variáveis
let a = 1222;
let b = 22352;
let c = 34353;
let d = 4334;
let e = 53453;

// Soma
let x = a + b;
console.log('Soma ' + '(' + a + ' + ' + b + '):', x);

// Subtração
let old_x = x;
x -= c; // x = x - c 
console.log('Subtração ' + '(' + old_x + ' - ' + c + '):', x);

// Divisão
old_x = x;
x = x / d;
console.log('Divisão ' + '(' + old_x + ' / ' + d + '):', x);

// Multiplicação
old_x = x;
x *= e;
console.log('Multiplicação ' + '(' + old_x + ' * ' + e + '):', x);

x = parseInt(x); // Garantir que x é inteiro

// Módulo (resto)
let mod = x % 2;
console.log('Módulo (Resto) ' + '(' + x + ' % 2):', mod);

old_x = x;

if(mod === 0){ // o x é par
    // Incremento
    x++; // x = x + 1 // x += 1
    console.log('Incremento ' + '(' + old_x + '++):', x);
} else { // o x é impar
    // Decremento
    x--; // x = x -1 // x -= 1
    console.log('Decremento ' + '(' + old_x + '--):', x);
}

console.log('Resultado final: ', x);