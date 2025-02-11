function compra() {
    produto = prompt(`Que produto você está comprando?`)
    preco = prompt(`Qual o preço deste ${produto}?`)
    dinheiro = prompt(`Quanto você deu para pagá-lo?`)
    troco = dinheiro-preco
    alert(`Você comprou um(a) ${produto} por R$${preco}, deu R$${dinheiro}. Sendo assim, seu troco deve ser de R$${troco}`)
}