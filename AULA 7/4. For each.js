/*
 For each(item, index, array)

 item) - Dados/informações que estão dentro do array
 index) - Numero da posição do item dentro do array
 array) - O proprio array que esta sendo percorrido

*/

const users = [
    { name: "Naverdathi", age: 30, contact: '(19) 98765-8877' },
    { name: "Paulo Plinio", age: 25, contact: '(19) 98765-8877' },
    { name: "Memphis ", age: 20, contact: '(19) 98765-8877' },
    { name: "Maria", age: 18, contact: '(19) 98765-8877' },
    { name: "Tinw", age: 15, contact: '(19) 98765-8877' },
    { name: "Haru", age: 4, contact: '(19) 87690-8877' }
]

users.forEach(function(item, index, array){
   if(item.age < 18){
    console.log(`O cliente ${item.name} é menor de idade, com ${item.age} anos de idade, e seu contato é ${item.contact}`)
   }
});