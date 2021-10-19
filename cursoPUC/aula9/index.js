
function validacao(valor) {
    if(!Number.isInteger(valor)){ 
        return undefined 
    } else if (valor > 9) {
        return undefined 
    } else if(valor < -9) { 
        return undefined 
    }
    return valor
}

function EhNegativo(valor) {
    if(valor < 0){
        return "MENOS"
    }
}

function escreverPorExtenso(){
    let valor
    let numero
    do {
        valor=+prompt('Digite um número inteiro de -9 a 9:' , '0')
        numero = validacao(valor)
        if(numero === undefined) {
            alert("Numero inválido. Tente novamente!")
        }
    } while (numero === undefined)

    const numerosEmExtenso = ['ZERO', 'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE']

    // const num10_19 = ['DEZ', 'ONZE', 'DOZE', 'TREZE', 'QUATORZE', 'QUINZE', 'DEZESSEIS', 'DEZESSETE', 'DEZOITO', 'DEZENOVE']

    // const num20 = ['VINTE', 'TRINTA', 'QUARENTA', 'CINQUENTA', 'SESSENTA', 'OITENTA', 'NOVENTA', ]

    const palavraAlvo = numerosEmExtenso[Math.abs(numero)]

    return `${numero} por extenso é ${EhNegativo(valor)} ${palavraAlvo}`
} 

alert(escreverPorExtenso())


