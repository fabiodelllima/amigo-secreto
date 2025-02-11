# Amigo Secreto

> Uma aplicação web interativa para organizar sorteios de **Amigo Secreto**, desenvolvida como parte do programa **Oracle Next Education (ONE)**, uma parceria entre **Oracle** e **Alura**.

> Deploy: https://secreto-amigo.vercel.app/

### Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Execução](#execução)
- [Funcionamento](#funcionamento)
- [Oracle ONE](#oracle-one)
- [Agradecimentos](#agradecimentos)

## Sobre

Este projeto foi desenvolvido durante a formação **Oracle ONE**, aplicando conceitos de desenvolvimento front-end. O **Amigo Secreto** é uma aplicação web que facilita a organização de sorteios, garantindo uma distribuição justa e aleatória entre os participantes.

A aplicação implementa regras específicas para garantir um sorteio adequado:

- Exige um mínimo de 6 participantes
- Requer um número par de participantes
- Garante que ninguém sorteie a si mesmo
- Evita duplicação de nomes
- Limita as tentativas de sorteio para prevenir loops infinitos

### Tecnologias

- HTML5 semântico para estruturação adequada do conteúdo
- CSS3 com variáveis personalizadas para um design consistente
- JavaScript (ES6+) com sistema de módulos
- Fontes do Google (Inter e Merriweather) para tipografia
- Controle de versão com Git e metodologia GitFlow

<div>    
  <img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png">‎ 
  <img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png">‎ 
  <img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png">
  <img height="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png">‎ 
</div>

### Funcionalidades

A aplicação oferece uma experiência completa de sorteio com:

- Validação em tempo real dos participantes
- Sistema de sorteio automatizado e justo
- Exibição clara dos resultados
- Opção de recomeçar o sorteio a qualquer momento
- Feedback visual para todas as ações do usuário

### Pré-requisitos

Para executar o projeto em seu ambiente local, você precisará de:

- Um navegador web moderno (Chrome, Firefox, Edge, Safari, etc)
- Um servidor local para servir os arquivos (devido ao uso de módulos ES6)
- Git instalado para clonar o repositório

### Execução

Siga estes passos para executar o projeto localmente:

1. Clone o repositório:
   ```bash
   # Via HTTPS:
   git clone https://github.com/fabiodelllima/amigo-secreto.git
   
   # Via SSH:
   git clone git@github.com:fabiodelllima/amigo-secreto.git
   
   # Entre na pasta do projeto
   cd amigo-secreto
   ```
2. Inicie um servidor local. Você pode usar o **Live Server** do **VSCode** ou executar:
   ```bash
   npx serve .
   ```
3. Acesse a aplicação em seu navegador através do endereço indicado pelo servidor local

### Funcionamento

1. Digite o nome de um participante no campo de entrada
2. Clique em "Adicionar" ou pressione Enter
3. Repita o processo até ter no mínimo 6 participantes (número par)
4. Clique em "Sortear amigo" para realizar o sorteio
5. Os resultados serão exibidos na tela
6. Use o botão "Recomeçar" para fazer um novo sorteio

## Oracle ONE

Este projeto faz parte do programa **Oracle ONE (Oracle Next Education)**, uma iniciativa que visa formar novos desenvolvedores e conectá-los ao mercado de trabalho. Durante o desenvolvimento, foram aplicados conhecimentos adquiridos em:

- Lógica de Programação
- Front-end
- JavaScript e DOM
- Versionamento com Git
- Metodologias Ágeis

### Agradecimentos

- **Oracle** e **Alura** pela oportunidade de participação no programa **ONE**
- Instrutores e mentores do programa
- Comunidade de desenvolvedores do **Oracle ONE**

<br>

---

<div align="center">

  <br>

  Desenvolvido com 🖤 como parte do programa **Oracle ONE**

</div>
