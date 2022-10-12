const PessoaFisicaService = require("../services/pessoa-fisica.service.js")
const { faker } = require("@faker-js/faker")
const fakerBr = require("faker-br")
const PessoaFisicaRepository = require("../repositories/pessoa-fisica.repository.js")


class PessoaFisicaController {
    #service
    constructor(service) {
        this.#service = service
    }


    async criar(req, res) {
        const dadosPessoa = {
            id: faker.datatype.number({ min: 1, max: 100 }),
            nome: faker.name.firstName(),
            contato: faker.datatype.number({ min: 88888888, max: 99999999 }),
            dataNascimento: faker.date.birthdate(),
            cpf: fakerBr.br.cpf()
        }
        
        try {
            const pessoaFisicaCriada = await this.#service.create(dadosPessoa)
            return res.status(201).json(pessoaFisicaCriada)
        } catch (err) {
            res.status(500).json(err.message)
        }

    }

    async buscarPorId(req, res) {
        const id = req.params.id
        try {
            const pessoaFisica = await this.#service.findById(id)
            return res.json(pessoaFisica)
        } catch (err) {
            return res.status(404).json(err.message)
        }

    }

    async buscarTodos(req, res) {
        const pessoas = await this.#service.find()
        res.json(pessoas)
    }

    async atualizar(req, res) {
        const id = req.params.id
        const pessoa = req.body
        try {
            const pessoaAtualiada = await this.#service.update(id, pessoa)
            res.json(pessoaAtualiada)
        } catch (err) {
            return res.status(404).json(err.message)
        }

    }

    async deletar(req, res) {
        const id = req.params.id
        try {
            const resposta = await this.#service.delete(id)
            return res.json(resposta)
        } catch (err) {
            return res.status(404).json(err.message)
        }

    }
}

const repository = new PessoaFisicaRepository()
const service = new PessoaFisicaService(repository)
module.exports = new PessoaFisicaController(service)