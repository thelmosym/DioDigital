/**
 * =============================================
 *  🎮 HERÓI DE AVENTURA - Versão 2.0
 *  Desafio DIO - Classes de um Jogo
 * =============================================
 *
 * Conceitos utilizados:
 *  - Variáveis (let, const)
 *  - Operadores (aritméticos, comparação, lógicos)
 *  - Laços de repetição (for...of)
 *  - Estruturas de decisão (if/else, operador ternário)
 *  - Funções (métodos, arrow functions)
 *  - Classes e Objetos (herança, encapsulamento, polimorfismo)
 */

// ─── Tabela de ataques usando Map ──────────────────────────────
const ATAQUES = new Map([
    ['mago',      { arma: 'magia',          danoBase: 12, emoji: '🔮' }],
    ['guerreiro', { arma: 'espada',         danoBase: 15, emoji: '⚔️' }],
    ['monge',     { arma: 'artes marciais', danoBase: 10, emoji: '👊' }],
    ['ninja',     { arma: 'shuriken',       danoBase: 13, emoji: '🌟' }],
]);

// ─── Classe Base: Heroi ────────────────────────────────────────
class Heroi {
    #vida; // propriedade privada

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
        this.#vida = 100;
        this.nivel = 1;
        this.xp = 0;
    }

    // Getter para vida (encapsulamento)
    get vida() {
        return this.#vida;
    }

    // Método principal de ataque (requisito do desafio)
    atacar() {
        const info = ATAQUES.get(this.tipo);

        if (info) {
            // Calcula dano com variação aleatória
            const variacao = Math.floor(Math.random() * 6) - 2; // -2 a +3
            const dano = info.danoBase + variacao + this.nivel;
            const critico = Math.random() > 0.8;
            const danoFinal = critico ? dano * 2 : dano;

            console.log(
                `${info.emoji} O ${this.tipo} ${this.nome} atacou usando ${info.arma}!` +
                (critico ? ' 💥 CRÍTICO!' : '') +
                ` (Dano: ${danoFinal})`
            );

            // Ganha XP ao atacar
            this._ganharXP(10);
            return danoFinal;
        } else {
            console.log(`⚠️  O tipo "${this.tipo}" não possui um ataque definido.`);
            return 0;
        }
    }

    // Recebe dano
    receberDano(quantidade) {
        this.#vida = Math.max(0, this.#vida - quantidade);
        const status = this.#vida > 0 ? `❤️ Vida restante: ${this.#vida}` : '💀 Foi derrotado!';
        console.log(`   ${this.nome} recebeu ${quantidade} de dano. ${status}`);
        return this.#vida > 0;
    }

    // Sistema de XP e level up
    _ganharXP(quantidade) {
        this.xp += quantidade;
        const xpParaSubir = this.nivel * 30;

        if (this.xp >= xpParaSubir) {
            this.xp -= xpParaSubir;
            this.nivel++;
            console.log(`   ⬆️  ${this.nome} subiu para o nível ${this.nivel}!`);
        }
    }

    // Representação em texto do herói
    toString() {
        const info = ATAQUES.get(this.tipo);
        const emoji = info ? info.emoji : '🦸';
        return `${emoji} ${this.nome} | Tipo: ${this.tipo} | Idade: ${this.idade} | Vida: ${this.#vida} | Nível: ${this.nivel}`;
    }
}

// ─── Função de Combate entre dois heróis ───────────────────────
function combate(heroi1, heroi2) {
    console.log('\n' + '═'.repeat(55));
    console.log(`  ⚔️  COMBATE: ${heroi1.nome} vs ${heroi2.nome}`);
    console.log('═'.repeat(55));

    let rodada = 1;

    // Laço de repetição — luta até um ser derrotado
    while (heroi1.vida > 0 && heroi2.vida > 0) {
        console.log(`\n── Rodada ${rodada} ──`);

        // Herói 1 ataca
        const dano1 = heroi1.atacar();
        const vivo2 = heroi2.receberDano(dano1);
        if (!vivo2) break;

        // Herói 2 contra-ataca
        const dano2 = heroi2.atacar();
        const vivo1 = heroi1.receberDano(dano2);
        if (!vivo1) break;

        rodada++;
    }

    // Resultado final
    const vencedor = heroi1.vida > 0 ? heroi1 : heroi2;
    console.log(`\n🏆 ${vencedor.nome} venceu o combate!\n`);
}

// ═══════════════════════════════════════════════════════════════
//  🎯 EXECUÇÃO PRINCIPAL
// ═══════════════════════════════════════════════════════════════

// Criação dos heróis
const herois = [
    new Heroi("Gandalf",  1000, "Mago"),
    new Heroi("Arthur",   35,   "Guerreiro"),
    new Heroi("Lee",      28,   "Monge"),
    new Heroi("Hattori",  24,   "Ninja"),
];

// ── 1. Apresentação dos heróis (laço for...of) ────────────────
console.log('🎮 HERÓIS DA AVENTURA');
console.log('─'.repeat(55));

for (const heroi of herois) {
    console.log(heroi.toString());
}

// ── 2. Cada herói realiza seu ataque (requisito do desafio) ───
console.log('\n📢 ATAQUES INDIVIDUAIS');
console.log('─'.repeat(55));

for (const heroi of herois) {
    heroi.atacar();
}

// ── 3. Combate de exemplo ─────────────────────────────────────
const mago = new Heroi("Merlin", 500, "Mago");
const ninja = new Heroi("Hanzo", 30, "Ninja");

combate(mago, ninja);
