tamanhoLista = int(input("Digite o tamanho da lista: "))
lista = []
for produto in range(0,tamanhoLista):
    lista.append(input("Adicionar: "))
print("Lista de compras:")
for produto in lista:
    print(produto)