//Personalizando a forma como uma Array é exibida no console.

let valores = [3, 1, 5, 4, 6, 7]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

//Percurso padrão para exibição de valores de uma Array
for (let pos = 0; pos<valores.length; pos++) {
    console.log(`Posição ${pos} = ${valores[pos]}`)
}

//Sintaxe simplificada do "for", específica para Arrays e Objetos
for (let pos in valores) { //Para cada "pos" dentro de "valores"
    console.log(`Posição ${pos} : Valor ${valores[pos]}`)
}

//Elementos ordenados de forma crescente
for (let pos in valores.sort((a,b) => a-b)) {
    console.log(`Posição ${pos} : Valor ${valores[pos]}`)
}