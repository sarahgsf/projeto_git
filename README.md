# 🌐 projeto_git – Site Estático com Express e Docker

Este projeto é um site simples com HTML, CSS e JavaScript, servido por um servidor **Express (Node.js)** e empacotado com **Docker**.

## 🧾 Funcionalidade

O site carrega uma interface com arquivos estáticos (`index.html`, `estilos.css`, `codigo.js`) e pode ser acessado via navegador. Ele também utiliza um arquivo JSON (`starwars.json`) como base de dados local para teste.

---

## 👩‍💻 Integrantes do grupo

- Sarah Frossard


---

## 🐳 Como rodar a aplicação com Docker

### 1. Construa a imagem Docker
### 2. Execute o contêiner
### 3. Acesse a aplicação

No terminal, dentro da pasta do projeto:

```bash
docker build -t projeto_git .


docker run -p 3000:3000 projeto_git


http://localhost:3000
