const Pessoa = require("./pessoa.js")
const pessoaEvento = require('../eventos/pessoa.evento.js');



class PessoaFisica extends Pessoa {
    cpf
    constructor(nome, contato, dataNascimento, cpf) {
        super(nome, contato, dataNascimento)
        this.cpf = cpf
    }

    static criar(nome, contato, dataNascimento, cpf) {
        const resultadoValidacaoCpf = PessoaFisica.validarCpf(cpf)
        const pessoaFisica = new PessoaFisica(nome, contato, dataNascimento, resultadoValidacaoCpf)
        pessoaEvento.emit("pessoa-fisica.criada", pessoaFisica)
        return pessoaFisica
    }

    static atualizar(pessoaFisica) {
        const resultadoValidacaoCpf = PessoaFisica.validarCpf(pessoaFisica.cpf)
        const novaPessoaFisica = new PessoaFisica(pessoaFisica.nome, pessoaFisica.contato, pessoaFisica.dataNascimento, resultadoValidacaoCpf)
        pessoaEvento.emit("pessoa-fisica.atualizada", novaPessoaFisica)
        return novaPessoaFisica
    }

    static validarCpf(cpf) {
        const formataCpfString = String(cpf)
        const cpfFormatado = `${formataCpfString.substring(0, 3)}.${formataCpfString.substring(3, 6)}.${formataCpfString.substring(6, 9)}-${formataCpfString.substring(9, 11)}`
        const validar = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        const resultado = cpfFormatado.match(validar)
        if (!resultado) {
            throw new Error("Cpf invalido")
        }
        return Number(cpf)
    }


}

module.exports = PessoaFisica