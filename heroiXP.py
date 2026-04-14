while True:
    nome = input("Digite o nome do herói (ou 'sair' para encerrar): ")
    
    if nome.lower() == "sair":
        break

    xp = int(input("Digite a quantidade de XP do herói: "))

    if xp < 1000:
        nivel = "Ferro"
    elif xp <= 2000:
        nivel = "Bronze"
    elif xp <= 5000:
        nivel = "Prata"
    elif xp <= 7000:
        nivel = "Ouro"
    elif xp <= 8000:
        nivel = "Platina"
    elif xp <= 9000:
        nivel = "Ascendente"
    elif xp <= 10000:
        nivel = "Imortal"
    else:
        nivel = "Radiante"

    print(f"O Herói de nome {nome} está no nível de {nivel}")