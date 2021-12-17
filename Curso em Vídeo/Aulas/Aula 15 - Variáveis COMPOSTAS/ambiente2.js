let valores = [8, 1, 5, 0, 19, 6]

for (i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

console.log('')

for(i in valores){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

console.log(valores.indexOf(19))