const Pessoa = require("./pessoa.js")

class PessoaJuridica extends Pessoa {
    cnpj
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento)
        this.cnpj = cnpj
    }
}

static criar(nome, contato, dataNascimento, cnpj) {
    const resultadoValidacaoCnpj = PessoaJuridica.validarCnpj(cnpj)
    const pessoaJuridica = new PessoaJuridica(nome, contato, dataNascimento, resultadoValidacaoCnpj)
    pessoaEvento.emit("pessoa-juridica.criada", pessoaJuridica)
    return pessoaJuridica
}

// static atualizar(pessoaJuridica) {
//     const resultadoValidacaoCnpj = PessoaJuridica.validarCnpj(pessoaFisica.cpf)
//     const novaPessoaJuridica = new PessoaJuridica(pessoaJuridica.nome, pessoaJuridica.contato, pessoaJuridica.dataNascimento, resultadoValidacaoCnpj)
//     pessoaEvento.emit("pessoa-juridica.atualizada", novaPessoaJuridica)
//     return novaPessoaJuridica
// }

static validarCnpj(cnpj) {
    const formataCnpjString = String(cnpj)
    const cnpjFormatado = `${formataCnpjString.substring(0, 2)}.${formataCnpjString.substring(2, 5)}.${formataCnpjString.substring(5, 8)}/${formataCnpjString.substring(8, 12)}-${formataCnpjString.substring(12, 14)}`
    const validar = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}\$/;
    const resultado = cnpjFormatado.match(validar)
    if (!resultado) {
        throw new Error("Cnpj invalido")
    }
    return formataCnpjString
}

module.exports = PessoaJuridica