import sqlite3 ## Biblioteca para banco de dados

# Conexão com o banco (cria o arquivo se não existir)
conn = sqlite3.connect("herois.db")
cursor = conn.cursor()

# Criação da tabela
cursor.execute("""
CREATE TABLE IF NOT EXISTS herois (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    xp INTEGER,
    nivel TEXT
)
""")

# Função para classificar nível
def classificar_nivel(xp):
    if xp < 1000:
        return "Ferro"
    elif xp <= 2000:
        return "Bronze"
    elif xp <= 5000:
        return "Prata"
    elif xp <= 7000:
        return "Ouro"
    elif xp <= 8000:
        return "Platina"
    elif xp <= 9000:
        return "Ascendente"
    elif xp <= 10000:
        return "Imortal"
    else:
        return "Radiante"

# Loop principal
while True:
    nome = input("Digite o nome do herói (ou 'sair'): ")

    if nome.lower() == "sair":
        break

    xp = int(input("Digite o XP do herói: "))

    # Classificação
    nivel = classificar_nivel(xp)

    # Inserção no banco
    cursor.execute(
        "INSERT INTO herois (nome, xp, nivel) VALUES (?, ?, ?)",
        (nome, xp, nivel)
    )
    conn.commit()

    print(f"O Herói de nome {nome} está no nível de {nivel}")

# 📊 Exibir todos os heróis cadastrados
print("\n===== LISTA DE HERÓIS =====")

cursor.execute("SELECT nome, xp, nivel FROM herois")
herois = cursor.fetchall()

for heroi in herois:
    print(f"Nome: {heroi[0]} | XP: {heroi[1]} | Nível: {heroi[2]}")

# Fechar conexão
conn.close()