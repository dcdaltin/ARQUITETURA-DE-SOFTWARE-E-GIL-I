const pessoaEvento = require('../../dominio/eventos/pessoa.evento.js');
const PessoaFisica = require("../../dominio/pessoa-fisica.js")

class PessoaFisicaService {
    #repository
    pessoaFisica
    constructor(repository) {
        this.#repository = repository
        pessoaEvento.on('pessoa-fisica.criada', (pessoaFisica) => {
            this.pessoaFisica = pessoaFisica
        });
        pessoaEvento.on('pessoa-fisica.atualizada', (pessoaFisica) => {
            this.pessoaFisica = pessoaFisica
        });
    }

    async create(pessoaFisica) {
        PessoaFisica.criar(pessoaFisica.nome, pessoaFisica.contato, pessoaFisica.dataNascimento, pessoaFisica.cpf)
        return await this.#repository.create(this.pessoaFisica)
    }

    async find() {
        return await this.#repository.find()
    }

    async findById(id) {
        const pessoaFisica = await this.#repository.findById(id)
        if (!pessoaFisica) {
            throw new Error("Pessoa não encontrada")
        }
        return pessoaFisica
    }

    async update(id, pessoaFisica) {
        await this.findById(id)
        PessoaFisica.atualizar(pessoaFisica)
        return await this.#repository.update(id, this.pessoaFisica)
    }

    async delete(id) {
        await this.findById(id)
        return await this.#repository.delete(id)
    }
}

module.exports = PessoaFisicaService