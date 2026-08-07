const prompt = require('prompt-sync')();

const nomeCidade = prompt("Digite o nome da cidade: ");
const habitantes = Number(prompt(`Digite a quantidade de habitantes de ${nomeCidade}: `));

// Verifica se a população é maior que 300.000
if (habitantes > 300000) {
  console.log(`${nomeCidade} é uma cidade GRANDE!`);
} else {
  console.log(`${nomeCidade} NÃO é uma cidade grande (pequena ou média).`);
}