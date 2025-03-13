precoProduto1 = float(input("Valor do produto 1: "))
precoProduto2 = float(input("Valor do produto 2: "))
precoCarrinho = precoProduto1 + precoProduto2
print("Valor atual do carrinho:",precoCarrinho)

desconto = precoCarrinho * 0.1
print("Desconto de 10%, R$",desconto)

print("Valor final do carrinho:",(precoCarrinho - desconto))