function verificar(){
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoNasc = window.document.getElementById('txtano')
    var anoDeNascimento = Number(anoNasc.value)
    var idade = (anoAtual - anoDeNascimento)
    var resultado = window.document.getElementById('resultado')
    var img = window.document.getElementById('imagem')

    if (anoDeNascimento > anoAtual || anoNasc.value.length == 0){
        window.alert('[ERRO] Digite um ano válido.')
    }else{
        var sex = window.document.getElementsByName('radsex')
        var sexo = ''
        if (sex[0].checked){
            sexo = 'homem'
            }else{
            sexo = 'mulher'
            }

            if (sexo == 'homem'){
                if (idade < 5){
                    img.setAttribute('src', 'Fotos/11.jpg')
                }else if (idade < 12){
                    img.setAttribute('src', 'Fotos/21.jpg')
                }else if (idade < 20){
                    img.setAttribute('src', 'Fotos/31.jpg')
                }else if (idade < 45){
                    img.setAttribute('src', 'Fotos/41.jpg')
                }else if (idade < 65){
                    img.setAttribute('src', 'Fotos/51.jpg')
                }else if (idade < 110){
                    img.setAttribute('src', 'Fotos/61.jpg')
                }else{
                    img.setAttribute('src', 'Fotos/0.jpg')
                }
            }else{
                if (idade < 5){
                    img.setAttribute('src', 'Fotos/12.jpg')
                }else if (idade < 12){
                    img.setAttribute('src', 'Fotos/22.jpg')
                }else if (idade < 20){
                    img.setAttribute('src', 'Fotos/32.jpg')
                }else if (idade < 45){
                    img.setAttribute('src', 'Fotos/42.jpg')
                }else if (idade < 65){
                    img.setAttribute('src', 'Fotos/52.jpg')
                }else if (idade < 110){
                    img.setAttribute('src', 'Fotos/62.jpg')
                }else{
                    img.setAttribute('src', 'Fotos/0.jpg')
                }
        }
        }
        resultado.innerHTML = `É ${sexo} de ${idade} anos`
    }