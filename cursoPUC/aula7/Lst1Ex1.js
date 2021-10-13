function perimetro (lado1,lado2,lado3)
{
  return lado1+lado2+lado3
}

let lado1=+prompt("Digite a medida do primeiro lado:","medida do primeiro lado");
let lado2=+prompt("Digite a medida do segundo lado:","medida do segundo lado");
let lado3=+prompt("Digite a medida do terceiro lado:","medida do terceiro lado")
console.log("O perímetro vale "+perimetro(lado1,lado2,lado3))