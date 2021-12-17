var idade = 72
if (idade < 16){
    console.log('Não vota')
}else{
    if (idade >= 16 && idade < 18 || idade>70){
        console.log('Pode votar')
    }else{
        console.log('Voto obrigatório')
    }
}