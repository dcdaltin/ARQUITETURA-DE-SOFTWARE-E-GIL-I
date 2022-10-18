const Db = require("../../../db-memory.js")

class PessoaFisicaRepository {

    async create(data) {
        const respostaPessoaFisicaDb = await Db.create(data, "tabelaPessoaFisica")
        return respostaPessoaFisicaDb
    }

    async findById(id) {
        const pessoaFisica = await Db.findById(id, "tabelaPessoaFisica")
        return pessoaFisica
    }

    async find() {
        const pessoas = await Db.find("tabelaPessoaFisica")
        return pessoas
    }

    async update(id, pessoa) {
        const pessoaAtualiada = await Db.update(id, pessoa, "tabelaPessoaFisica")
        return pessoaAtualiada
    }

    async delete(id) {
        const resposta = await Db.delete(id, "tabelaPessoaFisica")
        return resposta
    }
}

module.exports = PessoaFisicaRepository