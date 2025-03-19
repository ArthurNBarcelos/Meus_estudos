#Crie um programa que recebe a nota do Grau A e a nota do Grau B pelo teclado e imprime na tela se será necessário ou não realizar o Grau C (considere o sistema de avaliação da Unisinos, sendo o GA valendo 30% e o GB valendo 70%). Caso algum valor informado seja negativo, informe uma mensagem de erro e não realize o cálculo.

notaGrauA = float(input("Digite a nota do grau A: "))
notaGrauB = float(input("Digite a nota do grau B: "))
if notaGrauA < 0 or notaGrauB < 0:
    print("Valor inválido! Por favor, digite um número postivo.")
else:
    notaFinal = (notaGrauA * 0.3) + (notaGrauB * 0.7)
    if notaFinal >= 6:
        print("Não é necessária a realização do Grau C.")
    else:
        print("É necesária a realização do Grau C.")