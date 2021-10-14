function perimetro (lado1,lado2,lado3){
    return lado1+lado2+lado3
}

function validador(valor){
  console.log(!isNaN(valor))
  return !isNaN(valor) && valor >= 0
}

function tipoDeTriangulo(lado1, lado2, lado3){
  if(lado1 == lado2 && lado1 == lado3 && lado2==lado3){         //Triangulo equilátero
    return "Equilátero"
  } else if (lado1 == lado2 || lado1 == lado3 || lado2==lado3){ //Triangulo isósceles
    return "Isósceles"
  } else {                                                      //Triangulo escaleno
    return "Escaleno"
  }
}

const ladoTexto = ["primeiro", "segundo", "terceiro"]

const lado = []

for (i = 0; i < 3; i++){
  let valor=+prompt(`Digite a medida do ${ladoTexto[i]} lado:`,`medida do ${ladoTexto[i]} lado`)

  while (!validador(valor)) {
    console.log(undefined)
    valor=+prompt(`Digite a medida do ${ladoTexto[i]} lado:`,`medida do ${ladoTexto[i]} lado`)
  }

  lado.push(valor)
}

console.log("O perímetro vale "+perimetro(lado[0],lado[1],lado[2]))
console.log("Você criou um Triangulo "+tipoDeTriangulo(lado[0],lado[1],lado[2]))

