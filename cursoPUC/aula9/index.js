
function validacao(valor) {
    if(isNaN(valor)){ 
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
        valor=+prompt('Type a number between -9 and 9:' , '0')
        numero = validacao(valor)
        if(numero === undefined) {
            alert("invalid Number. Try again!")
        }
    } while (numero === undefined)

    const numerosEmExtenso = ['ZERO', 'ONE', 'TWO', 'TREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE']

    // const num10_19 = ['DEZ', 'ONZE', 'DOZE', 'TREZE', 'QUATORZE', 'QUINZE', 'DEZESSEIS', 'DEZESSETE', 'DEZOITO', 'DEZENOVE']     

    // const num20 = ['VINTE', 'TRINTA', 'QUARENTA', 'CINQUENTA', 'SESSENTA', 'OITENTA', 'NOVENTA', ]

    const palavraAlvo = numerosEmExtenso[Math.abs(numero)]

    return `${numero} por extenso é ${EhNegativo(valor)} ${palavraAlvo}`
} 

alert(escreverPorExtenso())


