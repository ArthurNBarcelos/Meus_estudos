//Retornando múltiplos parâmetros

function soma(a, b=1) { //valor de parâmetro pré-definido, padrão, se não houver parâmetro b, será considerado como 0
    return a + b
}

console.log(soma(2))