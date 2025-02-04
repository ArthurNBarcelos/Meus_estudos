function parimpar (n) {
    if (n%2 == 0) { //Se resto de n / 2 é igual a 0
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimpar(2)
console.log(res)
// ou
console.log(parimpar(2))