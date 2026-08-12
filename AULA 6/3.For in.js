/*
    Estrutura de Repetição For - LOOP
    - FOR IN
    -Usado para interrar objetos
*/

const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    donde:"quieres", 
    team: "Corinthians"

};




for(let key in user){
    console.log(`${key}  :  ${user[key]}`)
}