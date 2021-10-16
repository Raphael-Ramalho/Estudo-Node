function medidas_validas (lado1,lado2,lado3)
{
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3))
        return false;

    if (lado1<=0 || lado2<=0 || lado3<=0)
        return false;

    if (lado1+lado2<=lado3 ||
        lado2+lado3<=lado1 ||
        lado3+lado1<=lado2)
        return false;

    return true;
}

function calculo_do_perimetro (lado1,lado2,lado3)
{
    if (medidas_validas(lado1,lado2,lado3))
        return lado1+lado2+lado3;
    else
        return undefined;
}

function programa ()
{
  alert("PROGRAMA PARA CALCULAR O PERÍMETRO DE TRIÂNGULOS");

  let resposta;
  do
  {
      let perimetro;
      let prefixo="";
      do
      {
          let lado1=+prompt(prefixo+"Digite a medida em cm do primeiro lado:","primeiro lado em cm");
          let lado2=+prompt(prefixo+"Digite a medida em cm do segundo lado:" ,"segundo lado em cm");
          let lado3=+prompt(prefixo+"Digite a medida em cm do terceiro lado:","terceiro lado em cm");

          perimetro=calculo_do_perimetro(lado1,lado2,lado3);
          if (perimetro==undefined)
              prefixo="Foram digitadas medidas invalidas; tente novamente!\n";
          else
          {
              prefixo="";
              alert("O perímetro do triângulo indicado vale "+perimetro);
          }
      }
      while (perimetro==undefined);

      do
      {
          resposta=prompt(prefixo+"Deseja calcular perímetros de outros triângulos (S/N)?","S").toUpperCase();

          if (resposta!="S" && resposta!="N")
              prefixo="Foi digitada uma resposta inválida; tente novamente!\n";
          else
              prefixo=""
      }
      while (resposta!="S" && resposta!="N");
  }
  while (resposta=="S");

  alert("OBRIGADO POR USAR ESTE PROGRAMA!");
}

programa();