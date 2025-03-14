let nomeJogador = "Chrono"
let xpPersonagem = 0

for(xpPersonagem =1; xpPersonagem <1000;){
    xpPersonagem += 500
    console.log("O nível do herói " + nomeJogador + " é Ferro e seu xp é " + xpPersonagem)

}
if(xpPersonagem >= 1000)
    
    console.log("Você avançou para o próximo nível. O nível de " +nomeJogador + " é Bronze")
else{

}

do{
    xpPersonagem += 500
    console.log("O nível do herói " + nomeJogador + " é Bronze e o seu xp é " + xpPersonagem)
    
}
while(xpPersonagem < 2000){
    console.log("Você avançou para o próximo nível. O nível de " +nomeJogador + " é Prata e o seu xp é " + xpPersonagem)
   
    }

for(xpPersonagem = 2001; xpPersonagem <= 5000;){
    xpPersonagem += 500
    console.log("O nível do herói " + nomeJogador + " é Prata e seu xp é " + xpPersonagem)
    }
    console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Ouro e seu xp é " + xpPersonagem)


do{
    xpPersonagem += 500
    console.log("O nível do herói " + nomeJogador + " é Ouro e o seu xp é " + xpPersonagem)
        
    }
while(xpPersonagem < 7000){
    console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Platina e seu xp é " + xpPersonagem)
    }
   
for(xpPersonagem = 7001; xpPersonagem <= 8000;){
    xpPersonagem += 500
     console.log("O nível do herói " + nomeJogador + " é Platina e seu xp é " + xpPersonagem)
     console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Ascendente e seu xp é " + xpPersonagem)
    }
do{
    xpPersonagem += 500
    console.log("O nível do herói " + nomeJogador + " é Imortal e o seu xp é " + xpPersonagem)
            
    }
while(xpPersonagem < 10000){
    console.log("Parabéns, você subiu de nível. O nível do herói " + nomeJogador + " é Radiante e seu xp é " + xpPersonagem)
    }