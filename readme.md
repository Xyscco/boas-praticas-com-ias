# Documentação da API de Gerenciamento de Produtos

## Descrição Geral

Esta API RESTful permite o gerenciamento de produtos, possibilitando operações de criação, consulta, atualização e remoção (CRUD). Desenvolvida em Node.js com Express e persistência em SQLite, a API é ideal para aplicações que necessitam de um controle simples e eficiente de produtos.

Todas as respostas são em formato JSON e as requisições devem ser feitas utilizando o padrão REST.

---

## Endpoints

### 1. Criar Produto

- **URL:** `/produtos`
- **Método:** `POST`
- **Descrição:** Cria um novo produto.
- **Body (JSON):**
  ```json
  {
    "nome": "Nome do produto",
    "preco": 99.99,
    "descricao": "Descrição do produto"
  }
  ```
- **Respostas:**
  - `201 Created`: Produto criado com sucesso.
  - `400 Bad Request`: Dados inválidos.

---

### 2. Listar Todos os Produtos

- **URL:** `/produtos`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os produtos cadastrados.
- **Respostas:**
  - `200 OK`: Lista de produtos.

---

### 3. Buscar Produto por ID

- **URL:** `/produtos/{id}`
- **Método:** `GET`
- **Descrição:** Retorna os dados de um produto específico pelo ID.
- **Parâmetros de URL:**
  - `id` (integer): ID do produto.
- **Respostas:**
  - `200 OK`: Produto encontrado.
  - `404 Not Found`: Produto não encontrado.

---

### 4. Atualizar Produto

- **URL:** `/produtos/{id}`
- **Método:** `PUT`
- **Descrição:** Atualiza os dados de um produto existente.
- **Parâmetros de URL:**
  - `id` (integer): ID do produto.
- **Body (JSON):**
  ```json
  {
    "nome": "Novo nome",
    "preco": 79.90,
    "descricao": "Nova descrição"
  }
  ```
- **Respostas:**
  - `200 OK`: Produto atualizado.
  - `400 Bad Request`: Dados inválidos.
  - `404 Not Found`: Produto não encontrado.

---

### 5. Deletar Produto

- **URL:** `/produtos/{id}`
- **Método:** `DELETE`
- **Descrição:** Remove um produto do sistema.
- **Parâmetros de URL:**
  - `id` (integer): ID do produto.
- **Respostas:**
  - `204 No Content`: Produto removido com sucesso.
  - `404 Not Found`: Produto não encontrado.

---

## Observações

- Todos os endpoints retornam respostas em JSON.
- Os campos `nome` e `preco` são obrigatórios para criação e atualização.
- Utilize um client REST (como Bruno, Insomnia ou Postman) para testar a