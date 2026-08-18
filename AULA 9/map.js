/* 

 MAP (Mapear item por item do Array)
    - Criar um novo array com a mesma quantidade de itens do array original, mas com os itens modificados
    - O novo array você pode alterar o que quisser em relação ao array original, mas a quantidade de itens será a mesma
    - Você tem acesso a 3 dados:
                      - Item po item do array
                      - posição atual do array
                      - array completo que está sendo percorrido
*/


const produtos = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3500.99, temDesconto: true, quantidade: 1 , },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 2 , },
    { id: 3, nome: "Tablet iPad Air", preco: 5000.00, temDesconto: true, quantidade: 1 , },
    { id: 4, nome: "Fone de Ouvido Bluetooth", preco: 200.00, temDesconto: false, quantidade: 3 , },
    { id: 5, nome: "Smartwatch Apple Watch", preco: 3000.00, temDesconto: true, quantidade: 1 , },
    { id: 6, nome: "Câmera DSLR Canon", preco: 6000.00, temDesconto: false, quantidade: 1 , },
    { id: 7, nome: "Console de Videogame PlayStation 5", preco: 5000.00, temDesconto: true, quantidade: 1 , },
    { id: 8, nome: "Monitor Gamer LG", preco: 2500.00, temDesconto: false, quantidade: 2 , },
    { id: 9, nome: "Teclado Mecânico Razer", preco: 800.00, temDesconto: true, quantidade: 1 , },
    { id: 10,nome: "Xbox seris X ", preco: 3000.00, temDesconto: true, quantidade: 5 , },
    { id: 11,nome: "Xbox seris S ", preco: 2000.00, temDesconto: true, quantidade: 4 , },
    { id: 12,nome: "JBL BomBox ", preco: 3000.00, temDesconto: true, quantidade: 10 , },
    { id: 13,nome: "Iphone 17 ", preco: 8000.00, temDesconto: false, quantidade: 5 , },
    { id: 14,nome: " Arma de arsoft", preco: 3000.00, temDesconto: true, quantidade: 5 , }
   
];


const novosProdutos = produtos.map( produto => {
    
    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco


    
    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco,
        quantidade: produto.quantidade
    }
})


console.log(produtos)