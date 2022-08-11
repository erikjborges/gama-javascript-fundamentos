
// Lista de produtos
let produtos = [
    {
        codigo: 1,
        validade: new Date('2050-07-07') // criando uma data em JavaScript 07/07/2050
    },
    {
        codigo: 2,
        validade: new Date('2050-08-08') // criando uma data em JavaScript 07/07/2050
    },
    {
        codigo: 3,
        validade: new Date('2050-08-08') // criando uma data em JavaScript 07/07/2050
    },
    {
        codigo: 4,
        validade: new Date('2050-08-08') // criando uma data em JavaScript 07/07/2050
    },
    {
        codigo: 5,
        validade: new Date('2050-06-08') // criando uma data em JavaScript 07/07/2050
    }
];

// Verificar a validade de cada produto da lista

for(let i = 0; i < produtos.length; i++) {

    if(produtos[i].codigo == 1){
        continue; // Pular o resto do código dentro do por e
                    // ir para o próximo
    }

    if(produtos[i].validade < new Date('2050-08-01')){
        console.log('Codigo ' + produtos[i].codigo + ': Produto vencido');
        break; // Parar imediatamente
    } else {
        console.log('Codigo ' + produtos[i].codigo + ': Produto dentro do prazo de validade');
    }
}