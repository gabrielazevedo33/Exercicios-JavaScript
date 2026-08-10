/* Fuctions / funções
        -Trecho de codigo que e executado somente quando solicitado 
        -Pode receber parametros e retornar valores
        -Pode ser reutilizado varias vezes
        -Pode ser chamado de qualquer lugar do codigo    

[ ] o que e uma função  e como 
[ ] função VOID (vazia) -> não retorna valor
[ ] função com parametro -> recebe valor de entrada
[ ] função com retorno -> retorna valor de saida
[ ] Arrow Function -> função anonima
*/


/* função VOID (vazia) */

function dondeQuieres() {
    const name = 'Estas seguro ?'
    console.log(name)
}

dondeQuieres()


/* função com parametro */

function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log(resultado)
}

soma(5, 10,)
soma(10, 20) 

/* função com retorno */

function estaEndividado(receita, gastos) {
    if(receita > gastos) {
        return "Você não está endividado"
    }else {
        return "Você está endividado"
    }
}

const naverdathi = estaEndividado(3000, 4000);
const pauloPlinio = estaEndividado(15000, 6000);

console.log(naverdathi)
console.log(pauloPlinio)

