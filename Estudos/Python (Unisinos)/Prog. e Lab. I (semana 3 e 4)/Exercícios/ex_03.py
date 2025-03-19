#Crie um programa que recebe dois valores inteiros A e B pelo teclado e imprime o valor de A dividido por B. Entretanto, se o valo de B for 0, imprima uma mensagem de erro e não faça a divisão.

ano = int(input("Digite um ano: "))
if ano % 4 == 0:
    print("O ano é bissexto")
else:
    print("O ano não é bissexto")