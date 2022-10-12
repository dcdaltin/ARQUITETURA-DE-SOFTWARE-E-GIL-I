const Pessoa = require("../../src/dominio/pessoa.js")
const PessoaFisica = require("../../src/dominio/pessoa-fisica.js")

describe('Testes de unidade Pessoa Fisica', () => {
    test('Deve criar uma pessoa fisica', () => {
        const novaPessoa = {
            nome: "joao",
            contato: 99998989,
            dataNascimento: new Date("1990-02-24"),
            cpf: 999999999
        }
        const pessoa = PessoaFisica.criar(novaPessoa.nome, novaPessoa.contato, novaPessoa.dataNascimento, novaPessoa.cpf)
        expect(pessoa).toEqual(novaPessoa)
    });
});