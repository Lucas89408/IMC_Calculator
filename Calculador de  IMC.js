/* O IMC - índice de massa corporal é um critério da Orgânização Mundial de Saúde para dar uma indicção sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um ALgorítimo que dado o peso e a altura de uma pessoa adulta mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
-Abaixo de 18.5 - está abaixo do peso.
E-ntre 18.5 e 25 - peso normal.
-Entre 25 e 38 - acima do peso.
-Entre 38 e 40 - Obeso.
-Acima de 40 -  Obesidade grave.
*/
const myWeight = 60; // Coloque aqui o seu peso
const myHeight = 1.67; // E aqui sua altura
const myImc = myWeight / (myHeight * myHeight);
console.log(myImc.toFixed(2));

if (myImc < 18.5) {
  console.log(`${myImc.toFixed(2)} = Abaixo do peso.`);
} else if (myImc >= 18.5 && myImc < 25) {
  console.log(`${myImc.toFixed(2)} = Peso normal.`);
} else if (myImc >= 25 && myImc < 38) {
  console.log(`${myImc.toFixed(2)} = Acima do peso.`);
} else if (myImc >= 38 && myImc < 40) {
  console.log(`${myImc.toFixed(2)} = Obeso.`);
} else {
  console.log(`${myImc.toFixed(2)} = Obesidae grave.`);
}
