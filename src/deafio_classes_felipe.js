class hero{
    constructor(nome, idade, classe, weapon){
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.weapon = weapon
        
    }

    message(){
        console.log(`O guerreiro ${this.nome} de idade ${this.idade} de classe ${this.classe} atacou com ${this.weapon.name}`)
    }
    
}

class weapon{
    constructor(espada = "espada", magia = "magia", artes = "artes marciais", shuriken = "shuriken"){
        this.espada = espada
        this.magia = magia
        this.artes = artes
        this.shuriken = shuriken
        this.name = espada || magia || artes || shuriken
    
        }
}


let receiveWeapon = new weapon ("shuriken")
let statPersonagem = new hero ("Ramon", 32, "ninja", receiveWeapon)
statPersonagem.message()



