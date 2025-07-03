const express = require('express');
const produtosRoutes = require('./routes/produtos');

const app = express();
app.use(express.json());

app.use('/produtos', produtosRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});