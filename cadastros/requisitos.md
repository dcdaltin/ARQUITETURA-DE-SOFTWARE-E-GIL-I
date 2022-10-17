## Sistema de Cadastro de Pessoas

### Pessoa Fisica

- Deve validar o CPF baseado no formato comum em texto exemplo: "578.167.891-30"
- Deve salvar uma pessoa com um CPF válido no formato de numero exemplo: 57816789130 no banco de dados

```javascript
 cpf.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
```

### Pessoa Juridica

- Deve validar o CNPJ baseado no formato comum em texto exemplo: "96.314.193/0001-24"
- Deve salvar uma pessoa com um CNPJ válido no formato de numero exemplo: 96314193000124 no banco de dados

```javascript
 cnpj.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
```
