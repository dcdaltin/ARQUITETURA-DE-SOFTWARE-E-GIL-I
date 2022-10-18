const express = require("express")
const PessoaFisicaController = require("./controllers/pessoa-fisica.controller.js")
const PessoaJuridicaController = require("./controllers/pessoa-juridica.controller.js")

const router = express.Router()

router.post("/pessoa-fisica", PessoaFisicaController.criar.bind(PessoaFisicaController))
router.get("/pessoa-fisica/:id", PessoaFisicaController.buscarPorId.bind(PessoaFisicaController))
router.get("/pessoa-fisica", PessoaFisicaController.buscarTodos.bind(PessoaFisicaController))
router.put("/pessoa-fisica/:id", PessoaFisicaController.atualizar.bind(PessoaFisicaController))
router.delete("/pessoa-fisica/:id", PessoaFisicaController.deletar.bind(PessoaFisicaController))

router.post("/pessoa-juridica", PessoaJuridicaController.criar.bind(PessoaFisicaController))
router.get("/pessoa-juridica/:id", PessoaJuridicaController.buscarPorId.bind(PessoaJuridicaController))
router.get("/pessoa-juridica", PessoaJuridicaController.buscarTodos.bind(PessoaJuridicaController))
router.put("/pessoa-juridica/:id", PessoaJuridicaController.atualizar.bind(PessoaJuridicaController))
router.delete("/pessoa-juridica/:id", PessoaJuridicaController.deletar.bind(PessoaJuridicaController))


module.exports = router