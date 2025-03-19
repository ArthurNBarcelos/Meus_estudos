quantidade = 0
soma = 0
while quantidade < 10:
    num = int(input(f"Digite o número {quantidade+1}: "))
    soma += num
    print("Soma até o momento:",soma)
    quantidade += 1