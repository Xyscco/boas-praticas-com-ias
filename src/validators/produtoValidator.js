const { body } = require('express-validator');

const produtoValidations = [
    body('nome').isString().withMessage('Nome deve ser uma string').notEmpty().withMessage('Nome é obrigatório'),
    body('preco').isFloat({ gt: 0 }).withMessage('Preço deve ser um número maior que zero'),
    body('descricao').optional().isString().withMessage('Descrição deve ser uma string')
];

module.exports = produtoValidations;