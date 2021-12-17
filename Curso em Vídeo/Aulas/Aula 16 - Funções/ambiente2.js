/* Função Soma */
function somaExemploUm(n1,n2){
    return n1+n2
}
console.log(somaExemploUm(1,2))
console.log(somaExemploUm(1))



console.log('')




function somaExemploDois(n1=0,n2=0){  /* O sinal de '=' após os parâmetros atribui valores caso eles não sejam preenchidos. */
    return n1+n2
}
console.log(somaExemploDois(1,2))
console.log(somaExemploDois(1))




console.log('')



/* Função Área do Círculo */
function areaDoCirculo(raio){
    const pi = 3.14
    return (raio**2)*pi
}
console.log(areaDoCirculo(4))


console.log('')


/* Função Raio do Círculo */
function raioDoCirculo(area){
    const pi = 3.14
    return Math.sqrt(area/pi)
}
console.log(raioDoCirculo(100))