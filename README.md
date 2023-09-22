## Cálculo do IMC (Índice de Massa Corporal)

Este código JavaScript calcula o Índice de Massa Corporal (IMC) de uma pessoa adulta com base em seu peso e altura. O IMC é um critério da Organização Mundial de Saúde (OMS) que fornece uma indicação sobre a condição de peso de uma pessoa.

### Como o código funciona

1. **Definição das variáveis `peso` e `altura`:**

   ```javascript
   var peso = 80.00;
   var altura = 1.73;
Você pode alterar os valores das variáveis peso​​e alturacalcular o IMC para diferentes pessoas.

### Cálculo do IMC:


O IMC é calculando dividindo o peso (em quilogramas) pela altura ao quadrado (em metros).

### Determinação da condição de peso:

O código utiliza estruturas condicionais  `if` e `else` para determinar a condição de peso com base no valor do cálculo do IMC. As condições e mensagens correspondentes são as seguintes:

- IMC < 18,5: "Abaixo do Peso"
- 18,5 <= IMC <= 25: "Peso Normal"
- 25 < IMC <= 30: "Acima do Peso"
- 30 <IMC <= 40: "Obeso"
- IMC > 40: "Obesidade Grave"


~~~javascript

    if (IMC < 18.5) {
        console.log('O seu IMC é: ' + IMC.toFixed(1) + '. Você está abaixo do Peso.');
    } else if (IMC >= 18.5 && IMC <= 25) {
        console.log('O seu IMC é: ' + IMC.toFixed(1) + '. Você está no peso Ideal.');
    } else if (IMC > 25 && IMC <= 30) {
        console.log('O seu IMC é: ' + IMC.toFixed(1) + '. Você está acima do Peso.');
    } else if (IMC > 30 && IMC <= 40) {
        console.log('O seu IMC é: ' + IMC.toFixed(1) + '. Você está Obeso.');
    } else {
        console.log('O seu IMC é: ' + IMC.toFixed(1) + '. Você está em estado de obesidade Grave.');
    } 
~~~


## Resultado:

Dependendo dos valores do peso e altura fornecidos, o programa determinará a condição de peso da pessoa com base nas faixas do IMC e imprimirá a mensagem correspondente no console.
