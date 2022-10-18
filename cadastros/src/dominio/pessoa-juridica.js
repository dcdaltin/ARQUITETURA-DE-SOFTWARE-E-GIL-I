const Pessoa = require("./pessoa.js")

//22.222.222/2222-22

class PessoaJuridica extends Pessoa {
    cnpj
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento)
        this.cnpj = cnpj
    }

    static validarCnpj(cnpj) {
        const formatacnpjString = String(cnpj)
        const cnpjFormatado = `${formatacnpjString.substring(0, 2)}
                                .${formatacnpjString.substring(2, 5)}
                                .${formatacnpjString.substring(5, 8)}
                                /${formatacnpjString.substring(8, 12)}
                                -${formatacnpjString.substring(13, 15)}`

        const validar = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        const resultado = cnpjFormatado.match(validar)
        if (!resultado) {
            throw new Error("cnpj invalido")
        }
        return formatacnpjString
    }

    static criar(nome, contato, dataNascimento, cnpj) {
        const resultadoValidacaoCnpj = PessoaJuridica.validarCnpj(cnpj)
        const pessoaJuridica = new PessoaJuridica(nome, contato, dataNascimento, resultadoValidacaoCnpj)
        return pessoaJuridica
    }

    static atualizar(pessoaJuridica) {
        const resultadoValidacaoCnpj = PessoaJuridica.validarCnpj(pessoaJuridica.cnpj)
        const novaPessoaJuridica = new PessoaJuridica(pessoaJuridica.nome, pessoaJuridica.contato, pessoaJuridica.dataNascimento, resultadoValidacaoCnpj)
        return novaPessoaJuridica
    }
}

module.exports = PessoaJuridica