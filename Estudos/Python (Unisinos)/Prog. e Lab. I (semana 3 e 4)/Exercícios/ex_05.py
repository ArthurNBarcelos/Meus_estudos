#Crie um programa que solicita que o usuário digite uma letra e imprime na tela se a letra é uma vogal ou uma consoante.

letra = input("Digite uma letra: ")
if letra == "a" or letra == "e" or letra == "i" or letra == "o" or letra == "u":
    print("Vogal")
else:
    print("Consoante")