
//Definir minha variáveis
let jarra = 100;
let cafeteira = {
    po: 1,
    agua: false,
    ligada: false,
    cafe_pronto: true
}
let xicara = 100;

// Fazer café
if(100 > jarra){
    // Preciso fazer café
    console.log("Fazendo um novo café quentinho... :)");
    if(cafeteira.po != true){
        console.log("Colocando pó...");
        cafeteira.po = true;
    }
    if(cafeteira.agua == false){
        cafeteira.agua = true;
    }
    
    if(cafeteira.ligada){
        console.log("Ligando cafeteira...");
        cafeteira.ligada = true;
    }

    cafeteira.cafe_pronto = true;
    jarra = 100;
} else if(xicara === 0){ // Tomar café
    // encher minha xicara
    if(cafeteira.cafe_pronto){
        xicara = 100;
        jarra -= 100;
    }
    console.log('Café quentinho na xícara, que tal um golinho de felicidade?');
} else if(jarra > 100){ // Jarra derramando
    // alerta de jarra derramando
    cafeteira.ligada = false;
    console.log('Jarra está cheia demais, cuidado...');
} else { // Manter quente
    // aquecer o café
    cafeteira.ligada = true;
    console.log('Estamos mantendo o seu café quentinho...');
}