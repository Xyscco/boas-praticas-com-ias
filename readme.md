# API RESTful de Produtos

Esta API permite gerenciar produtos com operações de CRUD utilizando Node.js, Express e SQLite, totalmente criada para entender as boas praticas de desenvolvimento usando IAS com Copilot.

## Como executar

1. Instale as dependências:
   ```
   npm install
   ```

2. Para desenvolvimento com live reload:
   ```
   npm run dev
   ```

3. Acesse a API em:  
   `http://localhost:3000`

---

## Endpoints

### 1. Criar Produto

- **POST** `/produtos`
- **Body (JSON):**
  ```json
  {
    "nome": "Camiseta",
    "preco": 49.9,
    "descricao": "Camiseta 100% algodão"
  }
  ```
- **Resposta:**  
  `201 Created`  
  ```json
  {
    "id": 1,
    "nome": "Camiseta",
    "preco": 49.9,
    "descricao": "Camiseta 100% algodão"
  }
  ```

---

### 2. Listar Todos os Produtos

- **GET** `/produtos`
- **Resposta:**  
  `200 OK`  
  ```json
  [
    {
      "id": 1,
      "nome": "Camiseta",
      "preco": 49.9,
      "descricao": "Camiseta 100% algodão"
    }
  ]
  ```

---

### 3. Buscar Produto por ID

- **GET** `/produtos/{id}`
- **Resposta:**  
  `200 OK`  
  ```json
  {
    "id": 1,
    "nome": "Camiseta",
    "preco": 49.9,
    "descricao": "Camiseta 100% algodão"
  }
  ```
- **Erro:**  
  `404 Not Found`  
  ```json
  { "erro": "Produto não encontrado" }
  ```

---

### 4. Atualizar Produto

- **PUT** `/produtos/{id}`
- **Body (JSON):**
  ```json
  {
    "nome": "Camiseta Polo",
    "preco": 59.9,
    "descricao": "Camiseta polo masculina"
  }
  ```
- **Resposta:**  
  `200 OK`  
  ```json
  {
    "id": 1,
    "nome": "Camiseta Polo",
    "preco": 59.9,
    "descricao": "Camiseta polo masculina"
  }
  ```
- **Erro:**  
  `404 Not Found`  
  ```json
  { "erro": "Produto não encontrado" }
  ```

---

### 5. Deletar Produto

- **DELETE** `/produtos/{id}`
- **Resposta:**  
  `204 No Content`
- **Erro:**  
  `404 Not Found`  
  ```json
  { "erro": "Produto não encontrado" }
  ```

---

## Testando com Bruno ou outro client REST

1. Crie uma requisição para cada endpoint conforme exemplos acima.
2. Use o corpo JSON indicado para POST e PUT.
3. Altere o `{id}` conforme necessário.

---