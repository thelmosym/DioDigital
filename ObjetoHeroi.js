/**
 * Classe que representa um herói de uma aventura.
 */
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Normaliza para evitar erros de maiúsculas
    }

    /**
     * Método que define a estratégia de ataque com base no tipo do herói.
     */
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque genérico';
        }

        // Saída conforme solicitado
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Exemplos de Uso ---

const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Arthur", 35, "guerreiro");
const heroi3 = new Heroi("Lee", 28, "monge");
const heroi4 = new Heroi("Hattori", 24, "ninja");

heroi1.atacar(); // o mago atacou usando magia
heroi2.atacar(); // o guerreiro atacou usando espada
heroi3.atacar(); // o monge atacou usando artes marciais
heroi4.atacar(); // o ninja atacou usando shuriken