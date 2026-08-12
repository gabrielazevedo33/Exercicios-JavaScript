/*
Estrutura de repetição - LOOP
    - FOR
        1) Inicialização - Criar uma variavel e colocar
                           um valor inicial pra ela
 
        2) CONDIÇÃO - Enquanto for true (verdadeiro) o laço vai continuar executando
                      ele ira verificar antes de cada interação se a condição é verdadeira ou falsa

        3) EXPRESSÃO FINAL - O que ira acontecer a cada vez que o laço dar uma volta

        for ([inicialização]; [condição]; [expressão final]) {
            Seu código aqui  


    */


          const users = ["Alice", "Bob", "Charlie", "David", "Eve"]; // lenght(tamanho do array) = 5
          
            for(let i = 0; i <users.length;  i++){
                console.log(users[i])

            }