const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta src
app.use(express.static(path.join(__dirname, "src")));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
