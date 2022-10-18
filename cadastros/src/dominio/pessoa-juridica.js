const Pessoa = require("./pessoa.js")
const pessoaEvento = require('../eventos/pessoa.evento.js');


class PessoaJuridica extends Pessoa {
    cnpj
    constructor(nome, contato, dataNascimento, cnpj) {
        super(nome, contato, dataNascimento)
        this.cnpj = cnpj
    }

    static criar(nome, contato, dataNascimento, cnpj) {
        const resultadoValidacaoCnpj = PessoaJuridica.validarCnpj(cnpj)
        const pessoaJuridica = new PessoaJuridica(nome, contato, dataNascimento, resultadoValidacaoCnpj)
        pessoaEvento.emit("pessoa-juridica.criada", PessoaJuridica)
        return pessoaJuridica
    }

    static validarCnpj(cnpj) {
        const formataCnpjString = String(cnpj)
        const cnpjFormatado = `${formataCnpjString.substring(0, 3)}.${formataCnpjString.substring(3, 6)}.${formataCnpjString.substring(6, 9)}-${formataCnpjString.substring(9, 11)}`
        
        const validar = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        const resultado = cnpjFormatado.match(validar)
        if (!resultado) {
            throw new Error("Cnpj invalido")
        }
        return formataCnpjString
    }

}

module.exports = PessoaJuridica