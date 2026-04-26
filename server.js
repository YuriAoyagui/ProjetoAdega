const express = require('express');
const path = require('path');
const app = express();

// Processam os dados que vêm de formulários e APIs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Caminho que está os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importa o arquivo de rotas e diz que ele gerencia todos os caminhos
const produtoRoutes = require('./src/routes/produtoRoutes');
app.use('/', produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🍷 Adega rodando em: http://localhost:${PORT}`);
});