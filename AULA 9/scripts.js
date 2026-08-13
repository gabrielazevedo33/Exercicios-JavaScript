/* 

 MAP (Mapear item por item do Array)
    - Criar um novo array com a mesma quantidade de itens do array original, mas com os itens modificados
    - O novo array você pode alterar o que quisser em relação ao array original, mas a quantidade de itens será a mesma
    - Você tem acesso a 3 dados:
                      - Item po item do array
                      - posição atual do array
                      - array completo que está sendo percorrido

REDUCE (Reduzir o array a um único valor)
    - reduzir um array inteiro a um único valor, seja ele um número, string ou objeto
        -Você tem acesso a 4 dados:
            -Acumulador (valor que está sendo acumulado a cada iteração)
            -Item atual do array
            -posição atual do array
            -array completo que está sendo percorrido


*/


//const numeros = [1, 2, 3, 4, 5];

//const dobro = numeros.map( (numero, index, arrayCompleto) => {
//    return numero * 2
//} );
//console.log(dobro)


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
    { id: 10, nome: "TV Samsung 80 ", preco: 7000.00, temDesconto: true, quantidade: 1 , }
];


// CRIAR UM NOVO ARRAY FORMATANDO  A MOEDA BRASILEIRA E APLICANDO DESCONTO DE 10% NOS PRODUTOS QUE TEM DESCONTO
const novosProdutos = produtos.map( novoProduto => {

    const novoPreco = novoProduto.temDesconto ? novoProduto.preco * 0.9 : novoProduto.preco;
    
    return {  
        id: novoProduto.id,
        nome: novoProduto.nome,
        preco: novoPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: novoProduto.quantidade,
    };
});

console.log(novosProdutos);

// QUAL SERA O FATURAMENTO TOTAL DA LOJA SE VENDER TODOS OS PRODUTOS, APLICANDO DESCONTO DE 10% NOS PRODUTOS QUE TEM DESCONTO
const totalVendas = produtos.reduce( (acumulador, produto) => {
    const precoComDesconto = produto.temDesconto ? produto.preco * 0.9 : produto.preco;
    return acumulador + (precoComDesconto * produto.quantidade);
}, 0); 

console.log( totalVendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));