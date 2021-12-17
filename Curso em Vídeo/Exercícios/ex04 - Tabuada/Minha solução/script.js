function tabuada(){
    var numero = window.document.getElementById('numins')
    var num = numero.value
    var res = window.document.getElementById('res')
    
    res.innerHTML = `Resultado: <br>`
    for(var t=1; t<=10;t++){
        res.innerHTML += `${num} x ${t} = ${num*t}<br>`
    }
}