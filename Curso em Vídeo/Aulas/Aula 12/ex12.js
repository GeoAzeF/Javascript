var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()
console.log(`Agora são ${hora}:${minuto}:${segundo}`)
    if (hora >= 0 && hora < 12){
        console.log('Bom dia!')
    }else{
        if (hora > 12 && hora < 18){
            console.log('Boa tarde!')
        }else{
            console.log('Boa noite!')
        }
    }