
function soma(n1,n2){
    let resultado = n1+n2
    console.log("o resultado da soma é: " )
    return resultado

}

function diminuir (n1,n2){
    let resultado = n1-n2
    console.log("o resultado da conta é: " )
    return resultado
}

function multiplicacao(n1,n2){
    let resultado = n1*n2
    console.log("o resultado da soma da multiplicaçao é: " )
    return resultado
}

function divisao(n1,n2){
    let resultado = n1 /n2
     if (n1 === 0 || n2  === 0 ){
        console.log ("o resultado da divisao por 0 é infinita na progamaçao")
     }
    console.log("o resultado da soma da divisao é: " )
    return resultado
}
function porcentagem (n1,n2){
    if (n1 ===0 ){
        return 0 
    }
    let resp = (n1 / 100) *n2
    console.log("o resultado da porcentagem é: " )
    return resp 

}
module.exports={
    soma,
    diminuir,
    multiplicacao,
    divisao,
    porcentagem

}