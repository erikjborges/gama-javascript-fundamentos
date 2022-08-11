
// Calculo dos ingredientes
function calculaIngredientes(){
    let ing1 = 1.00;
    let ing2 = 2.00;
    let ing3 = 3.00;
    
    let preco_ing = ing1 + ing2 + ing3;
    console.log('Valor Ingredientes: ', preco_ing);

    return preco_ing;
}

// Calculo da porcentagem da confeiteira

function calculaConfeiteira(preco_conf){
    let porc_conf = 30;
    preco_conf += preco_conf * porc_conf / 100;
    console.log('Valor Confeiteira: ', preco_conf);

    return preco_conf;
}

// Calculo das despesas de produção
function calculaDespesas(preco_desp){
    preco_desp += 5; // preco_final = preco_final + 5
    console.log('Valor Despesas: ', preco_desp);

    return preco_desp;
}

// Calculo dos custos fixos
// function calculaCustos(preco_cust){
//     preco_cust += 10;
//     console.log('Valor Custos: ', preco_cust);

//     return preco_cust;
// }
// Function Arrow
calculaCustos = (preco_cust) => preco_cust += 10;

// Calculo do meu lucro
// function calculaLucro(preco_luc){
//     let lucro = 0.25;
//     preco_luc += preco_luc * lucro;
//     console.log('Valor Lucro: ', preco_luc);

//     return preco_luc;
// }
// Function Arrow
calculaLucro = (preco_luc) => {
    let lucro = 0.25;
    preco_luc += preco_luc * lucro;
    console.log('Valor Lucro: ', preco_luc);

    return preco_luc;
}


/*
   ---------------------------------------------------
*/

let preco_final = calculaIngredientes();
preco_final = calculaConfeiteira(preco_final);
preco_final = calculaCustos(preco_final);
console.log('Valor Custos: ', preco_final);
preco_final = calculaDespesas(preco_final);
preco_final = calculaLucro(preco_final);

// Retornar o preço final
console.log('Preco Final de Venda: ', preco_final);