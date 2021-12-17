var ini = window.document.getElementById('ini')
var pas = window.document.getElementById('pas')
var fim = window.document.getElementById('fim')
var res = window.document.getElementById('res')

function contar(){
    if (pas.value <= 0 || (pas.value%1) != 0){
        window.alert('Número de passos deve ser POSITIVO e INTEIRO')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var p = Number(pas.value)
        var f = Number(fim.value)

        if (i < f){
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} ➡`
        }
        res.innerHTML += `🏁`
    }else{
        for(var c = i; c >=f; c -= p){
            res.innerHTML += `${c} ➡`
        }
        res.innerHTML += `🏁`
    }
}
}