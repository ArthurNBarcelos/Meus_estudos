function desconto() {
    var produto = prompt(`Qual é o produto que você está comprando?`)
    var preco = Number(prompt(`Qual é o preço do(a) ${produto}?`))
    var resultados = document.getElementById("resultado")
    var desconto = preco / 10
    var precoDesconto = preco - desconto
    resultados.innerHTML = `
    <h2>
        Calculando desconto de 10% para ${produto}
    </h2>
    <p>
        O preço original era de ${preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}
    </p>
    <p>
        Você acaba de ganhar ${desconto.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} de desconto.
    </p>
    <p>
        No fim, você vai pagar ${precoDesconto.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} no(a) ${produto}.
    </p>
    `
}