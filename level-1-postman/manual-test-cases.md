# Casos de teste manuais

## API Petstore

**Base URL:** `https://petstore.swagger.io/v2`

Importe a colecao e o ambiente `dev.postman_environment.json` no Postman e selecione o ambiente **Dev**. Execute os cenarios na ordem abaixo: a criacao gera um ID novo e salva o ID retornado em `petId`; os cenarios seguintes usam esse ID. O ultimo GET do fluxo confirma a exclusao e limpa a variavel.

| ID | Cenario | Metodo e endpoint | Passos | Resultado esperado |
|---|---|---|---|---|
| API-MAN-001 | Listar pets disponiveis | `GET /pet/findByStatus?status=available` | 1. Selecionar GET. 2. Informar a URL. 3. Enviar a requisicao. | HTTP 200 e resposta JSON em formato de lista. |
| API-MAN-002 | Criar pet | `POST /pet` | Executar **Criar pet de teste** com o corpo JSON da colecao. | HTTP 200; ID gerado, nome `pet-teste-newman` e status `available` retornados; `petId` salvo no ambiente. |
| API-MAN-003 | Consultar pet criado | `GET /pet/{{petId}}` | Executar **Consultar pet por ID** apos a criacao. | HTTP 200; ID, nome e status correspondem ao pet criado. |
| API-MAN-004 | Atualizar pet com JSON | `PUT /pet` | Executar **Atualizar pet por PUT** com o corpo JSON da colecao. | HTTP 200; mesmo ID, nome `pet-atualizado-put` e status `pending`. |
| API-MAN-005 | Confirmar atualizacao por PUT | `GET /pet/{{petId}}` | Executar **Consultar pet apos PUT**. | HTTP 200; nome `pet-atualizado-put` e status `pending` persistidos. |
| API-MAN-006 | Atualizar pet com formulario | `POST /pet/{{petId}}` | Executar **Atualizar pet por POST**, com `name` e `status` em `x-www-form-urlencoded`. | HTTP 200. |
| API-MAN-007 | Confirmar atualizacao por POST | `GET /pet/{{petId}}` | Executar **Consultar pet apos POST**. | HTTP 200; nome `pet-atualizado-post` e status `sold` persistidos. |
| API-MAN-008 | Excluir pet criado | `DELETE /pet/{{petId}}` | Executar **Excluir pet de teste**. | HTTP 200. |
| API-MAN-009 | Consultar pet excluido | `GET /pet/{{petId}}` | Executar **Consultar pet excluido**. | HTTP 404 e `petId` removido do ambiente. |
| API-MAN-010 | Consultar pet inexistente | `GET /pet/{{invalidPetId}}` | Executar **Pet inexistente** com `invalidPetId` do ambiente. | HTTP 404 e mensagem de pet nao encontrado. |

Os mesmos cenarios estao na colecao `api-tests.postman_collection.json` e podem ser executados no Postman ou em lote pelo Newman. As requisicoes que usam `petId` exigem a criacao previa; sem um ID valido no ambiente, elas sao ignoradas e registram falha.

O Petstore publico e compartilhado. Nao use IDs de outros usuarios: a colecao cria e exclui seu proprio pet. Se a execucao for interrompida antes da exclusao, execute **Excluir pet de teste** e **Consultar pet excluido** usando o `petId` salvo no ambiente. O cenario de ID inexistente depende de o valor configurado continuar inexistente na API publica.

## SauceDemo

**URL:** `https://www.saucedemo.com`

| ID | Cenario | Dados | Passos | Resultado esperado |
|---|---|---|---|---|
| WEB-MAN-001 | Login valido | `standard_user` / `secret_sauce` | 1. Abrir o site. 2. Informar usuario e senha. 3. Clicar em Login. | A pagina de produtos e exibida. |
| WEB-MAN-002 | Login invalido | `standard_user` / `senha-invalida` | 1. Abrir o site. 2. Informar credenciais. 3. Clicar em Login. | Mensagem de erro de autenticacao e exibida. |
| WEB-MAN-003 | Comprar um produto | `standard_user` / `secret_sauce` | 1. Fazer login. 2. Adicionar um produto ao carrinho. 3. Abrir o carrinho. 4. Iniciar checkout. 5. Preencher dados. 6. Finalizar compra. | Pedido concluido e mensagem `Thank you for your order!` exibida. |
