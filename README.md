#  Sistema de Validação com REGEX — JavaScript
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Projeto educacional desenvolvido utilizando **HTML, CSS e JavaScript**, com foco na utilização de **Expressões Regulares (REGEX)** para validação de dados em formulários.

O sistema permite validar entradas do usuário em tempo real, fornecendo **feedback visual e textual** sobre a validade das informações inseridas.

---

# 🎯 Objetivo do Projeto

Este projeto tem como finalidade:

* Trabalhar com **validação de dados utilizando REGEX**
* Implementar **interatividade com JavaScript**
* Aplicar **manipulação do DOM**
* Criar **feedback visual dinâmico**
* Integrar **HTML, CSS e JavaScript**

---

# 🧠 Conceitos de Programação Utilizados

Durante o desenvolvimento foram aplicados diversos conceitos importantes:

## Estruturas utilizadas

* Expressões Regulares (REGEX)
* Funções JavaScript
* Condicionais (`if/else`)
* Manipulação de classes (`classList`)
* Eventos (`onclick`)

## Recursos de Interface

* Validação em tempo real
* Feedback visual (cores)
* Mensagens dinâmicas
* Inputs estilizados

---

# 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

* **HTML5** → Estrutura do formulário
* **CSS3** → Estilização e feedback visual
* **JavaScript (Vanilla JS)** → Lógica de validação

---

# 📂 Estrutura do Projeto

```
validacao-regex/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

## Descrição dos arquivos

| Arquivo    | Função                                |
| ---------- | ------------------------------------- |
| index.html | Estrutura do formulário               |
| style.css  | Estilização e feedback visual         |
| script.js  | Lógica de validação com REGEX         |

---

# 🖥️ Funcionamento do Sistema

O sistema funciona da seguinte forma:

## Etapas:

1. O usuário digita um valor no campo de entrada
2. Ao clicar no botão **Validar**:
   * o valor é analisado com REGEX
3. O sistema retorna:
   * ✔️ válido → borda verde + mensagem positiva
   * ❌ inválido → borda vermelha + mensagem de erro

---

# 🔍 Validação com REGEX

A validação é feita utilizando **Expressões Regulares**, que permitem verificar padrões específicos de texto.

Exemplo de uso:

```javascript
function validar() {
  let input = document.getElementById("campo");
  let valor = input.value;

  let regex = /^[0-9]+$/; // exemplo: apenas números

  if (regex.test(valor)) {
    input.classList.add("valido");
  } else {
    input.classList.add("invalido");
  }
}
```

---

# 🎨 Estilização (CSS)

O sistema utiliza feedback visual para indicar o estado da validação:

```css
input.valido {
  border-color: green;
}

input.invalido {
  border-color: red;
}
```

Além disso, mensagens também mudam de cor:

```css
.valido-texto {
  color: green;
}

.invalido-texto {
  color: red;
}
```

---

# 📱 Interface do Usuário

A interface foi projetada para ser simples e funcional:

* Campo de entrada centralizado
* Botão de validação
* Mensagem dinâmica
* Feedback visual imediato

---

# 📚 Aprendizados da Atividade

Durante o desenvolvimento foram trabalhados:

* uso de **REGEX na prática**
* validação de dados de entrada
* manipulação do DOM
* uso de classes dinâmicas
* criação de feedback visual
* organização de código


---

# 👩‍💻 Autora

**Paolla Paula Veronez**

Estudante de Desenvolvimento de Sistemas

Projeto desenvolvido para fins educacionais utilizando **HTML, CSS e JavaScript**.
