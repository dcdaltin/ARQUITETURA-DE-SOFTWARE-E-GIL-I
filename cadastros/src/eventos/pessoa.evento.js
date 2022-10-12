const EventEmitter = require('events');

class PessoaEmitter extends EventEmitter {}
const pessoaEvento = new PessoaEmitter();

module.exports = pessoaEvento