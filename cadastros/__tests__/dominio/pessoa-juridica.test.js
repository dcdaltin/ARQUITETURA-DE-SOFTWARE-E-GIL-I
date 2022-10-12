const PessoaJuridica = require("../../src/dominio/pessoa-juridica")
const Pessoa = require("../../src/dominio/pessoa.js")

describe('Testes de unidade Pessoa Juridica', () => {
    test('Deve criar uma pessoa juridica', () => {
        const novaPessoa = {
            nome: "joao",
            contato: 99998989,
            dataNascimento: new Date("1990-02-24"),
            cnpj: 9999999990001
        }
        const pessoa = new PessoaJuridica(novaPessoa.nome, novaPessoa.contato, novaPessoa.dataNascimento, novaPessoa.cnpj)
        expect(pessoa).toEqual(novaPessoa)
    });
});