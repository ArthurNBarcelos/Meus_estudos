/*
    PROPOSTA DO DESAFIO

Criar um site onde eu possa adicionar números à uma lista, quer será analisada no final.

    Resultados da Análise:
    - Informar o total de números na lista;
    - Informar o maior número da lista;
    - Informar o menor número da lista;
    - Informar a soma de todos os números da lista;
    - Informar a média dos números da lista.

    *Para calcular a media, basta dividir a soma dos números pela quantidade de números.
*/
let ListaValores = []
let lista = document.getElementById('lista')
function adicionar() {
    let num = Number(document.getElementById('num').value) 
    let max = 10
    if (num >= 1 && num <= 100) {
        if (lista.length < max) {
            if (ListaValores.indexOf(num) == -1) { //indexOf() == -1 indica que essa posição não existe na lista
            // Adicionando o número à lista VISUAL
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado`
            lista.appendChild(item)
            // Adicionando o número à Lista de Valores
            ListaValores.push(num)
            } else {
                alert(`[ERRO] O número ${num} já está na lista`)
            }
        } else {
            alert(`[ERRO] O limite de números na lista é ${max}`)
        }
    } else {
        alert(`[ERRO] O número inserido precisa ser entre 1 e 100`)
    }    
}
function analisar() {
    ListaValores.sort((a,b) => a-b)
    for (soma = ListaValores[0], contador = 1; contador < ListaValores.length; contador++) {
        soma += ListaValores[contador]
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    let restxt = document.createElement('p')
    restxt.innerHTML = `
    Total de números na lista: ${ListaValores.length}<br>
    Maior número da lista: ${ListaValores[ListaValores.length - 1]}<br>
    Menor número da lista: ${ListaValores[0]}<br>
    Soma dos números da lista: ${soma}<br>
    Média entre os números da lista: ${soma/ListaValores.length}<br>
    Lista completa: ${ListaValores}
    `
    resultado.appendChild(restxt)
}
/*
Condições para a análise:
- Número não pode repetir;
OK - Máximo 10 números por lista;
OK - Números de 1 a 100.
*/