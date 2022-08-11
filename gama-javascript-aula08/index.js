let cores = ['grena', 'branco', 'verde'];
console.log(cores);

// Incluir e remover itens
console.log("------ Incluir/Remover -------");
cores.push('azul');
console.log(cores);
let cor = cores.pop();
console.log(cores, cor);

// Percorrer um array
console.log("------ Percorrendo -------");
cores.forEach((cor, index) => {
    console.log(cor, index);
});

// Fazer transformações em elementos
console.log("------ Transformação -------");
let cores_claras = cores.map((cor) => {
    return cor + ' claro';
});
console.log(cores_claras);

// Filtrar elementos
console.log("------ Filtrar -------");
let cores_filtro = cores.filter(cor => cor.length == 6);
console.log(cores_filtro);

// Pesquisar valores
console.log("------ Pesquisar -------");
let cor_pesquisa = cores.find(cor => cor.length == 5);
console.log(cor_pesquisa);

// Pesquisar index
console.log("------ Pesquisar Index -------");
let cor_index = cores.findIndex(cor => cor.length == 6);
console.log(cor_index);