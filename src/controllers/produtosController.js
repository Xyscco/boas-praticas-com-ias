// filepath: /node-rest-api/node-rest-api/src/controllers/produtosController.js
const db = require('../db/index');
const { validationResult } = require('express-validator');

const createProduto = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }

    const { nome, preco, descricao } = req.body;
    db.run(
        'INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?)',
        [nome, preco, descricao],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }
            res.status(201).json({ id: this.lastID, nome, preco, descricao });
        }
    );
};

const getAllProdutos = (req, res) => {
    db.all('SELECT * FROM produtos', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
};

const getProdutoById = (req, res) => {
    db.get('SELECT * FROM produtos WHERE id = ?', [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (!row) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }
        res.json(row);
    });
};

const updateProduto = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }

    const { nome, preco, descricao } = req.body;
    db.run(
        'UPDATE produtos SET nome = ?, preco = ?, descricao = ? WHERE id = ?',
        [nome, preco, descricao, req.params.id],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ erro: 'Produto não encontrado' });
            }
            res.json({ id: req.params.id, nome, preco, descricao });
        }
    );
};

const deleteProduto = (req, res) => {
    db.run('DELETE FROM produtos WHERE id = ?', [req.params.id], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: 'Produto não encontrado' });
        }
        res.status(204).send();
    });
};

module.exports = {
    createProduto,
    getAllProdutos,
    getProdutoById,
    updateProduto,
    deleteProduto
};