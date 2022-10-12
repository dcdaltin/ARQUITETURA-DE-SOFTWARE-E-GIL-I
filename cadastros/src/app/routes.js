const express = require("express")
const PessoaFisicaController = require("./controllers/pessoa-fisica.controller.js")

const router = express.Router()

router.post("/pessoa-fisica", PessoaFisicaController.criar.bind(PessoaFisicaController))
router.get("/pessoa-fisica/:id", PessoaFisicaController.buscarPorId.bind(PessoaFisicaController))
router.get("/pessoa-fisica", PessoaFisicaController.buscarTodos.bind(PessoaFisicaController))
router.put("/pessoa-fisica/:id", PessoaFisicaController.atualizar.bind(PessoaFisicaController))
router.delete("/pessoa-fisica/:id", PessoaFisicaController.deletar.bind(PessoaFisicaController))

module.exports = router