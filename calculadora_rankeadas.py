def calcular_partidas_rankeadas(vitorias, derrotas):
    """
    Função que recebe como parâmetros a quantidade de vitórias e derrotas de um jogador.
    Retorna o saldo de Rankeadas (vitórias - derrotas) e o nível alcançado.
    """
    # Variável para armazenar o saldo
    saldo_vitorias = vitorias - derrotas
    nivel = ""
    
     # E struturas de decisões para definir o nível baseado na quantidade de vitórias
    if vitorias <= 10:
        nivel = "Ferro"
    elif 11 <= vitorias <= 20: 
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    elif vitorias >= 101:
        nivel = "Imortal"
        
    return saldo_vitorias, nivel

def main():
    print("=== Calculadora de Partidas Rankeadas ===")
    
    # Laço de repetição para permitir o cálculo de vários heróis
    continuar = True
    while continuar:
        print("\n" + "-"*45)
        try:
            entrada_vitorias = input("Digite a quantidade de vitórias (ou 'sair' para encerrar): ")
            
            if entrada_vitorias.lower() == 'sair':
                print("Encerrando a calculadora... Até mais!")
                continuar = False
                continue
                
            vitorias = int(entrada_vitorias)
            derrotas = int(input("Digite a quantidade de derrotas: "))
            
            # Chamada da função e atribuição do retorno a variáveis
            saldo, nivel = calcular_partidas_rankeadas(vitorias, derrotas)
            
            # Saída exigida pelo desafio
            print(f"O Herói tem de saldo de **{saldo}** está no nível de **{nivel}**")
            
        except ValueError:
            print("Entrada inválida! Por favor, digite apenas números inteiros para vitórias e derrotas.")

if __name__ == "__main__":
    main()
