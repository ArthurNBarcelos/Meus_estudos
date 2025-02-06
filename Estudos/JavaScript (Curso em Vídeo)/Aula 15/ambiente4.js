/*
    PERCURSOS DE EXIBIÇÃO DE ARRAYS
*/

let array = [4, 12, 5, 8, 33, 20]
console.log(`Array:`)
console.log(array)
array.sort((a, b) => a - b)
console.log(`Ordem Crescente:`)
console.log(array)
console.log(`Total de elementos: ${array.length}`)

//Percurso padrão
console.log(`Percurso Padrão:`)
for (let posição = 0; posição < array.length ; posição++) {
    console.log(`${posição} : ${array[posição]}`)
}

//Percurso simplificado
console.log(`Percurso Simplificado:`)
for (let posição in array) {
    console.log(`${posição} : ${array[posição]}`)
}