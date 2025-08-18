// Seleciona elementos do HTML.
let informaSaldo = document.getElementById("informa-saldo");
let btnCalculaEstacionamento = document.getElementById("btn-calcula-estacionamento");
let valorInserido = document.getElementById("valor-inserido");

class Parquimetro {
    constructor(pagamento) {
        this.pagamento = pagamento;
        this.tabelaDePreco =  {
            1.00: 30,
            1.75: 60,
            3.00: 120
        }
    }

    calculaEstacionamento() {
        if (this.pagamento >= 1) {
            let tempo = 0;
            let troco = 0;

            if (this.pagamento >= 3.00) {
                tempo = 120;
                troco = this.pagamento - 3.00;
            } else if (this.pagamento >= 1.75) {
                tempo = 60;
                troco = this.pagamento - 1.75;
            } else {
                tempo = 30;
                troco = this.pagamento - 1.00;
            }

            // Exibe o resultado, unindo as mensagens.
            let mensagem = `Você tem ${tempo} minutos de estacionamento.`;
            // Verifica se há troco para exibir a mensagem.
            if (troco > 0) {
                mensagem += ` Seu troco é R$ ${troco.toFixed(2)}.`;
            }
            informaSaldo.innerText = mensagem;

        } else {
            informaSaldo.innerText = "O valor mínimo para pagamento é R$1,00.";
        }
    }
}

// Adiciona o Event Listener ao botão
btnCalculaEstacionamento.addEventListener('click', () => {
    // Pega o valor do input
    const pagamento = parseFloat(valorInserido.value);
    
    // Cria a instância da classe Parquimetro com o valor recém-obtido.
    const novoParquimetro = new Parquimetro(pagamento);
    
    // Chama o método para fazer o cálculo e exibir o resultado.
    novoParquimetro.calculaEstacionamento();
});