// Arquivo reservado para comandos customizados do Cypress.

// Executa uma requisicao GET na API definida em env.apiUrl sem falhar
// automaticamente em status 4xx/5xx, permitindo validar cenarios negativos.
Cypress.Commands.add("apiGet", (path, options = {}) => {
  return cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}${path}`,
    failOnStatusCode: false,
    ...options
  });
});

// Executa uma requisicao POST na API definida em env.apiUrl sem falhar
// automaticamente em status 4xx/5xx, permitindo validar cenarios negativos.
Cypress.Commands.add("apiPost", (path, body, options = {}) => {
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}${path}`,
    body,
    failOnStatusCode: false,
    ...options
  });
});
