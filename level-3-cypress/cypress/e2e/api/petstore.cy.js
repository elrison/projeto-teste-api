describe("Petstore - API", () => {
  context("Cenarios positivos", () => {
    it("TC01 - Consultar pet por ID", () => {
      // O Petstore publico e compartilhado, entao o pet e criado antes da consulta.
      const pet = { id: 987654321, name: "Rex", photoUrls: [], status: "available" };

      cy.apiPost("/pet", pet).then(() => {
        cy.apiGet(`/pet/${pet.id}`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("name", pet.name);
        });
      });
    });

    it("TC02 - Listar pets disponiveis", () => {
      cy.apiGet("/pet/findByStatus", { qs: { status: "available" } }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
      });
    });

    it("TC03 - Listar pets vendidos", () => {
      cy.apiGet("/pet/findByStatus", { qs: { status: "sold" } }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
      });
    });

    it("TC04 - Buscar pets por tag", () => {
      cy.apiGet("/pet/findByTags", { qs: { tags: "tag1" } }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
      });
    });

    it("TC05 - Consultar inventario da loja", () => {
      cy.apiGet("/store/inventory").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("available");
      });
    });
  });

  context("Cenarios negativos", () => {
    it("TC06 - Consultar pet inexistente", () => {
      cy.apiGet("/pet/999999999").then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it("TC07 - Consultar pet com ID invalido", () => {
      cy.apiGet("/pet/0").then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it("TC08 - Consultar usuario inexistente", () => {
      cy.apiGet("/user/usuario-inexistente").then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it("TC09 - Consultar pedido inexistente", () => {
      cy.apiGet("/store/order/999999999").then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it("TC10 - Consultar endpoint inexistente", () => {
      cy.apiGet("/endpoint-inexistente").then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
});
