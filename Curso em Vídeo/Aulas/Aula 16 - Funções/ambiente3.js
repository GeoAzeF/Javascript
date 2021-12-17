/* Variáveis podem receber valores definidos por funções */

let raio = function raioDoCirculo(area){
    const pi = 3.14
    return Math.sqrt(area/pi)
}
console.log(raio(100))




console.log('')



let dobro = function(x){
    return x*2
}
console.log(dobro(8))