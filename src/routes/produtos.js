const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const produtoValidator = require('../validators/produtoValidator');

// Rota para criar produto
router.post('/', produtoValidator, produtosController.createProduto);

// Rota para listar todos os produtos
router.get('/', produtosController.getAllProdutos);

// Rota para buscar um produto por ID
router.get('/:id', produtosController.getProdutoById);

// Rota para editar produto
router.put('/:id', produtoValidator, produtosController.updateProduto);

// Rota para deletar produto
router.delete('/:id', produtosController.deleteProduto);

module.exports = router;