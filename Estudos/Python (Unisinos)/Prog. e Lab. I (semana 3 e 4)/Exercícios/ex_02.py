#Crie um programa que recebe dois valores inteiros A e B pelo teclado e imprime o valor de A dividido por B. Entretanto, se o valo de B for 0, imprima uma mensagem de erro e não faça a divisão.

a = int(input("Digite o valor de A: "))
b = int(input("Digite o valor de B: "))
if b != 0:
    resultado = a/b
    print("O resultado da divisão é", resultado)
else:
    print("Erro! Impossível realizar a divisão")