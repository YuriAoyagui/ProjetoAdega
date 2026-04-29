const express = require('express');
const router = express.Router();
const path = require('path');
const produtoController = require('../controllers/produtoController');

const viewsPath = path.join(__dirname, '../views');

router.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'index.html')));
router.get('/cadastro', (req, res) => res.sendFile(path.join(viewsPath, 'cadastro.html')));
router.get('/listar', (req, res) => res.sendFile(path.join(viewsPath, 'listar.html')));
router.get('/editar', (req, res) => res.sendFile(path.join(viewsPath, 'edit.html')));
router.get('/reposicao', (req, res) => res.sendFile(path.join(viewsPath, 'reposicao.html')));
router.get('/historico', (req, res) => res.sendFile(path.join(viewsPath, 'historico.html')));
router.get('/relatorio', (req, res) => res.sendFile(path.join(viewsPath, 'relatorio.html')));

router.post('/cadastrar', produtoController.cadastrar);
router.post('/atualizar/:id', produtoController.atualizar);
router.get('/deletar/:id', produtoController.deletar);

router.get('/api/produtos', produtoController.listarTodos);
router.get('/api/produtos/:id', produtoController.buscarPorId);
router.get('/api/historico-hoje', produtoController.historicoHoje);
router.get('/api/relatorio-mensal', produtoController.relatorioMensal);

module.exports = router;
