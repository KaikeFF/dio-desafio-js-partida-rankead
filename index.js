let win = 150
let lose = 55

console.log(`O herói tem saldo de ${saldoVitorias(win, lose)} e está no nível ${nivelHeroi(saldoVitorias(win, lose))}`)

function saldoVitorias(win, lose){
    return (win - lose)
}

function nivelHeroi(saldo){
    let nivel
    if(saldo <= 10){
        return nivel = "Ferro"
    }else if(saldo <= 20){
        return nivel = "Bronze"
    }   
    else if(saldo <= 50){
        return nivel = "Prata"
    }   
    else if(saldo <= 80){
        return nivel = "Ouro"
    }   
    else if(saldo <= 90){
        return nivel = "Diamante"
    }   
    else if(saldo <= 100){
        return nivel = "Lendário"
    }   
    else if(saldo > 100){
        return nivel = "Imortal"
    }   
}

