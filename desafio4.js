/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

/* O IMC as variáveis */
var peso = 80.00;
var altura = 1.73;

/* Fórmula do IMC */
var IMC = peso / (altura * altura);


/* */
if (IMC < 18.5) {
    console.log( 'O seu IMC é: ' + IMC.toFixed(1) + '. Você está abaixo do Peso.'); }

else if  (IMC >=18.5 && IMC <=25 ) {
    console.log( 'O seu IMC é: ' + IMC.toFixed(1) + '. Você está no peso Ideal.'); }

else if (IMC >25 && IMC <=30 ) {
    console.log( 'O seu IMC é: ' + IMC.toFixed(1) + '. Você está acima do Peso.'); }

else if (IMC >30 && IMC <=40 ) {
    console.log( 'O seu IMC é: ' + IMC.toFixed(1) + '. Você está Obeso.'); }

else  { 
    console.log( 'O seu IMC é: ' + IMC.toFixed(1) + '. Você está em estado de obesidade Grave.');}
    