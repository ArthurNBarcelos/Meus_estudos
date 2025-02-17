var cotac = prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`)
var botao = document.getElementById("botao")
botao.focus()
function converter() {
    var reais = Number(prompt(`Quantos R$ você tem na carteira?`))
    var dolar = Number(reais / cotac)
    var res = document.getElementById("resultado")
    res.innerHTML =
    `
    Considerando a cotação ${cotac}
    e você possuindo${reais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, logo ${dolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
    `
}