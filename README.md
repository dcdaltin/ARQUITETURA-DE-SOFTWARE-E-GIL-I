# ARQUITETURA DE SOFTWARE E AGIL I

## Quem somos?
Somos um time de professores que se organizaram como uma equipe ágil, rodando em formato de SCRUMBAN. Sendo assim, esses somos nós e esses são nossos papéis:
- Dalton: Product Owner
- Rafael: Scrum Master
- Pablo: Desenvolvedor

## Qual o nosso projeto?
Nossa entrega de valor é o processo de aprendizado de arquitetura de software e AGILE através de aula práticas e discussões.

## Quem são nossos clientes?
Mulheres, em sua maioria, migrando de carreira no curso de programação

## Por que usamos SCRUMBAN?

### O SCRUM

<img src="https://i0.wp.com/mindmaster.com.br/wp-content/uploads/2021/03/353.jpeg?resize=800%2C500&ssl=1" />


### KANBAN

<img src="https://andresuman.com/wp-content/uploads/2022/02/Imagem-Kanban-Picture.png" />


### SCRUMBAN

<img src="https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2019/07/scrum-ban-delivery-sample.png" />


### Estimativas
- Capacidade de mão de obra
- Definir detalhes e etapas a ser realizadas
- Quebro em partes menores que conheço o esforço por experiências prévias
- Escalonar tarefas e observar tarefas bloqueantes


<img src="https://leonardomatsumota.files.wordpress.com/2019/09/story-points.jpg?w=820&h=312&crop=1" />


## Clean Code
<img src="https://miro.medium.com/max/1400/1*KvCweCeHKzxUedMRXhUg0Q.png" />

Veja o código abaixo. O que ele faz?
```js
    function 
    f (a, b, c)
    {return 
    (a + b + c)/3}
```
Olhando a modificação abaixo. O que essa função faz?
```js
    function f (a, b, c){
        let media = (a + b + c)/3;
        return (a + b + c)/3;
    }
```
Olhando a modificação abaixo. O que essa função faz?
```js
    //a função abaixo calcula a média de notas
    function f (a, b, c){
        let media = (a + b + c)/3;
        return (a + b + c)/3;
    }
```
Olhando a modificação abaixo. O que essa função faz?
```js
    function calculaMedia (a, b, c){
        let media = (a + b + c)/3;
        return (a + b + c)/3;
    }
```

Olhando para mais essa modificação abaixo. O que essa função faz?
```js
    function calculaMedia (nota1, nota2, nota3){
        let media = (nota1 + nota2 + nota3)/3;
        return (nota1 + nota2 + nota3)/3;
    }
```

Ainda não é um código limpo. Onde está o problema?
```js
    function calculaMedia (nota1, nota2, nota3){
        let media = (nota1 + nota2 + nota3)/3;
        return media;
    }
```

### SOLID

<img src="https://lh3.googleusercontent.com/PSumtaweXnWy5CaiUJLdyUIrs9wJvr9UYCBIc5QaVQQDWLq_ZYd24A6twk2qTYj-2rtScSjCmqdbNx4g_g09wK1Kp09QS8uJA4vP3t2TMPbBmHz_xDHJqfikIovlouVJvTt2Yy37" />

```js
    class Motorista{
        #automovel
        constructor(automovel){
            this.automovel = automovel
        }
    }
```

```js
    function calculaMedia (...params){
        let media = sum(params)/params.lenght
        //o código calcula e imprime 
        console.log(media)
        return media;
    }
```

### Code Smells

[Code Smells são trechos de código com característica já conhecidas e que tem "cheiro de problema" e também guias de como resolvê-los](https://refactoring.guru/refactoring/smells)

### DDD

[O que é o DDD?](https://medium.com/spotlight-on-javascript/domain-driven-design-for-javascript-developers-9fc3f681931a)
