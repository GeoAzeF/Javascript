function carregar(){
var imagem = window.document.getElementById('imagem')
var paragrafo = window.document.getElementById('paragrafo')
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
if (hora >=0 && hora < 12){
    paragrafo.innerHTML = `Bom dia! Agora são ${hora}:${minuto}`
    imagem.src = '1.png'
    document.body.style.background = "rgb(252,198,98)"
}else if (hora > 12 && hora < 18){
    paragrafo.innerHTML = `Boa tarde! Agora são ${hora}:${minuto}`
    imagem.src = '2.png'
    document.body.style.background = "rgb(238,86,3)"
}else{
    paragrafo.innerHTML = `Boa noite! Agora são ${hora}:${minuto}`
    imagem.src = '3.png'
    document.body.style.background = "rgb(50,53,62)"
}
}