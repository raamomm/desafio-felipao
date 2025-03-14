let nomeJogador = "Chrono"
let xpPersonagem = 0

console.log(" O nível atual do jogador é Ferro")
for(xpPersonagem =1; xpPersonagem <1000;){
    xpPersonagem += 500
    console.log("O herói " + nomeJogador + " ganhou 500 de xp. Seu xp agora é " + xpPersonagem)

}
if(xpPersonagem >= 1000)
    
    console.log("Você avançou para o próximo nível. O nível de " +nomeJogador + " é Bronze e seu xp atual é " + xpPersonagem)
else{

}

do{
    xpPersonagem += 500
    console.log("O herói " + nomeJogador + " ganhou 500 de xp. Seu xp agora é " + xpPersonagem)
    
}
while(xpPersonagem < 2000){
    console.log("Você avançou para o próximo nível. O nível de " + nomeJogador + " é Prata e o seu xp é " + xpPersonagem)
   
    }

for(xpPersonagem = 2001; xpPersonagem <= 5000;){
    xpPersonagem += 500
    console.log("O herói " + nomeJogador + " ganhou 500 de xp. Seu xp agora é " + xpPersonagem)
    }
    console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Ouro e seu xp é " + xpPersonagem)


do{
    xpPersonagem += 500
    console.log("O herói " + nomeJogador + " ganhou 500 de xp. Seu xp agora é " + xpPersonagem)
        
    }
while(xpPersonagem < 7000){
    console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Platina e seu xp é " + xpPersonagem)
    }
   
for(xpPersonagem = 7001; xpPersonagem <= 8000;){
    xpPersonagem += 500
     console.log("O herói " + nomeJogador + " ganhou 500 de xp. Seu xp agora é " + xpPersonagem)
     console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Ascendente e seu xp é " + xpPersonagem)
    }
do{
    xpPersonagem += 500
    console.log("O herói " + nomeJogador + " ganhou 500 de xp. Seu xp agora é " + xpPersonagem)
            
    }
while(xpPersonagem < 10000){
    console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Radiante e seu xp é " + xpPersonagem)
    }