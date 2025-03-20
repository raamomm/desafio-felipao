let result = calcRanked (102, 1)
console.log("O herói tem saldo de " + result + " vitórias")

if(result <= 10){
    console.log("Seu nível é ferro")
}

if(result >= 11 & result <=20){
    console.log("Seu nível é Bronze")

}

if(result >=21 & result <= 50){
    console.log("Seu nível é Prata")
}

if(result >=51 & result <= 80){
    console.log("Seu nível é Ouro")
}

if(result >=81 & result <= 90){
    console.log("Seu nível é Diamante")
}
if(result >=91 & result <= 100){
    console.log("Seu nível é Lendário")
}
if(result >= 101){
    console.log("Seu nível é Imortal")
}

function calcRanked (numVitorias, numDerrotas){
    let rank = numVitorias - numDerrotas
    return rank
}
