#Exercício 1. Crie um programa que recebe um inteiro pelo teclado e imprime se ele é par ou ímpar.  

num = int(input("Digite um número e eu direi se é par ou impar: "))
if num % 2 == 0:
    print("O número é par")
else:
    print("O número é impar")