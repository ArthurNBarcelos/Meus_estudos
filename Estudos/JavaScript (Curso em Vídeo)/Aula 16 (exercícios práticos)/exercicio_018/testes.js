/*
Informações de uma Array
    A quantidade de números
    Maior número
    Meno número
    Soma de todos os números
    Média de todos os números
*/

let num = [2, 3, 5, 1, 10]
num.sort((a,b) => a-b)
console.log(num)
for (soma = num[0], contador = 1; contador < num.length ; contador++) {
    soma += num[contador]
}

console.log(`
    Quantidade de números: ${num.length}
    Maior número: ${num[num.length - 1]}
    Menor número: ${num[0]}
    Soma de todos os números: ${soma}
    Média de todos os números:
    `)