/*
Se tiene una Wallet / Billetera virtual, a la que hay que agregarle en la
propiedad criptos del objeto Wallet, 3 critpomonedas, además se tiene que
conocer el total de stableCoin y el total de no stableCoin, si la propiedad 
stableCoin=true indica que es una stableCoin, por último indicar, cuál de 
las 3 criptos tiene mayor reserva de dinero tomando como referencia la 
propiedad del valor con dolar.
*/

35465
const Wallet = {
    criptos: [],
    status: true,
    user: "Carlol"
};

let BTC = {
    name: "bitcoin",
    usd: "100",
    btc: "0,0023",
    current: "$42,750.52",
    stableCoin: false
};

let ETH = {
    name: "ethereum",
    usd: "1000",
    eth: "0,31",
    current: "$3,199.91",
    stableCoin: false
};

let USDT = {
    name: "tether",
    usd: "500",
    usdt: "500",
    current: "$1.00",
    stableCoin: true
};


const nWallet = {...Wallet, criptos:[USDT, BTC, ETH]};
console.log(nWallet)
console.log("=".repeat(50));

let stableC = nWallet.criptos.filter(s => s.stableCoin == true);
console.log(`El total de StableCoins es ${stableC.length}`);

let noStableC = nWallet.criptos.filter(s => s.stableCoin == false);
console.log(`El total de NO StableCoins es ${noStableC.length}`);


console.log("=".repeat(50));
let encontrarStable = nWallet.criptos.map(criptos => {
    if (criptos.stableCoin === true){
        console.log(`${criptos.name.toUpperCase()} es un StableCoin`);
        console.log("=".repeat(50));
    }else{
        console.log(`${criptos.name.toUpperCase()} no es un StableCoin`);    
        console.log("=".repeat(50));
        return;
    }
});

let mayorReserva = nWallet.criptos.map(criptos => {
    if( criptos.current === "$42,750.52"){
        console.log(`${criptos.name.toUpperCase()} tiene la mayor reserva de $`);
        console.log("=".repeat(50));
        return;
    }
});


