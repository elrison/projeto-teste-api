# Casos de teste manuais

## API Petstore

**Base URL:** `https://petstore.swagger.io/v2`

| ID | Cenario | Metodo e endpoint | Passos | Resultado esperado |
|---|---|---|---|---|
| API-MAN-001 | Listar pets disponiveis | `GET /pet/findByStatus?status=available` | 1. Selecionar GET. 2. Informar a URL. 3. Enviar a requisicao. | HTTP 200 e resposta JSON em formato de lista. |
| API-MAN-002 | Consultar pet existente | `GET /pet/1` | 1. Selecionar GET. 2. Informar a URL. 3. Enviar a requisicao. | HTTP 200; resposta contem `id: 1` e o campo `name`. |
| API-MAN-003 | Consultar pet inexistente | `GET /pet/999999999` | 1. Selecionar GET. 2. Informar a URL. 3. Enviar a requisicao. | HTTP 404 e mensagem de pet nao encontrado. |

Os mesmos cenarios estao na colecao `api-tests.postman_collection.json` e podem ser executados individualmente no Postman ou em lote pelo Newman.

## SauceDemo

**URL:** `https://www.saucedemo.com`

| ID | Cenario | Dados | Passos | Resultado esperado |
|---|---|---|---|---|
| WEB-MAN-001 | Login valido | `standard_user` / `secret_sauce` | 1. Abrir o site. 2. Informar usuario e senha. 3. Clicar em Login. | A pagina de produtos e exibida. |
| WEB-MAN-002 | Login invalido | `standard_user` / `senha-invalida` | 1. Abrir o site. 2. Informar credenciais. 3. Clicar em Login. | Mensagem de erro de autenticacao e exibida. |
| WEB-MAN-003 | Comprar um produto | `standard_user` / `secret_sauce` | 1. Fazer login. 2. Adicionar um produto ao carrinho. 3. Abrir o carrinho. 4. Iniciar checkout. 5. Preencher dados. 6. Finalizar compra. | Pedido concluido e mensagem `Thank you for your order!` exibida. |
