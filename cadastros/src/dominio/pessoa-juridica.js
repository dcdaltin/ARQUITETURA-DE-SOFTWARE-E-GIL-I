const Pessoa = require("./pessoa.js")

class PessoaJuridica extends Pessoa {
    cnpj
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento)
        this.cnpj = cnpj
    }
}

module.exports = PessoaJuridica