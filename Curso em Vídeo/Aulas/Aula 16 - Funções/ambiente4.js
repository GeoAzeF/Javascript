function fatorialUm(n){
    let fat = 1
    for (i = n; i > 1; i--){
        fat *= i        
    }
    return fat
}
console.log(fatorialUm(5))





console.log('')




function fatorial(n){
    if (n == 1){
        return 1
    }else{
        return n*(fatorial(n-1))
    }
}
console.log(fatorial(8))