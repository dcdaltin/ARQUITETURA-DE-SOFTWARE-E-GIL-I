const Pessoa = require("./pessoa.js");

class PessoaJuridica extends Pessoa {
  cnpj;
  constructor(nome, idade, dataNascimento, cnpj) {
    super(nome, idade, dataNascimento);
    this.cnpj = cnpj;
  }

  static criar(nome, idade, dataNascimento, cnpj) {
    const resultadoValidacaoCnpj = PessoaJuridica.validarCnpj(cnpj);
    const pessoaJuridica = new PessoaJuridica(
      nome,
      idade,
      dataNascimento,
      resultadoValidacaoCnpj
    );
    pessoaEvento.emit("pessoa-juridica.criada", pessoaJuridica);
    return pessoaJuridica;
  }

  static validarCnpj(cnpj) {
    const formataCnpjString = String(cnpj);
    const cnpjFormatado = `${formataCnpjString.substring(
      0,
      2
    )}.${formataCnpjString.substring(2, 5)}.${formataCnpjString.substring(
      5,
      8
    )}/${formataCnpjString.substring(8, 12)}-${formataCnpjString.substring(
      12,
      14
    )}`;
    const validar = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    const resultado = cnpjFormatado.match(validar);
    if (!resultado) {
      throw new Error("Cnpj invalido");
    }
  }
}

module.exports = PessoaJuridica;
