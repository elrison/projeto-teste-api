const loginPage = require("../pages/login.page");
const inventoryPage = require("../pages/inventory.page");
const cartPage = require("../pages/cart.page");
const checkoutPage = require("../pages/checkout.page");

const validUser = "standard_user";
const validPassword = "secret_sauce";

describe("SauceDemo - Carrinho", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login(validUser, validPassword);
  });

  it("deve acessar a pagina de produtos", () => {
    cy.url().should("include", "/inventory.html");
    inventoryPage.title().should("have.text", "Products");
  });

  it("deve adicionar um produto ao carrinho", () => {
    inventoryPage.addProduct("sauce-labs-backpack");

    inventoryPage.cartBadge().should("have.text", "1");
    inventoryPage.cartLink().click();
    cartPage.item("Sauce Labs Backpack").should("be.visible");
  });

  it("deve adicionar dois produtos ao carrinho", () => {
    inventoryPage.addProduct("sauce-labs-backpack");
    inventoryPage.addProduct("sauce-labs-bike-light");

    inventoryPage.cartBadge().should("have.text", "2");
    inventoryPage.cartLink().click();
    cartPage.itemCount().should("have.length", 2);
  });

  it("deve remover um produto do carrinho", () => {
    inventoryPage.addProduct("sauce-labs-backpack");
    inventoryPage.addProduct("sauce-labs-bike-light");
    inventoryPage.cartLink().click();
    cartPage.removeProduct("sauce-labs-backpack");

    cartPage.item("Sauce Labs Backpack").should("not.exist");
    cartPage.item("Sauce Labs Bike Light").should("be.visible");
  });

  it("deve retornar do carrinho para continuar comprando", () => {
    inventoryPage.addProduct("sauce-labs-backpack");
    inventoryPage.cartLink().click();
    cartPage.continueShopping();

    cy.url().should("include", "/inventory.html");
    inventoryPage.title().should("have.text", "Products");
  });

  it("deve bloquear checkout sem dados obrigatorios", () => {
    inventoryPage.addProduct("sauce-labs-backpack");
    inventoryPage.cartLink().click();
    cartPage.checkout();
    checkoutPage.continue();

    checkoutPage.errorMessage().should("contain.text", "First Name is required");
  });

  it("deve concluir o checkout do carrinho", () => {
    inventoryPage.addProduct("sauce-labs-backpack");
    inventoryPage.cartLink().click();
    cartPage.checkout();
    checkoutPage.fillInformation("Ana", "Tester", "01000-000");
    checkoutPage.continue();
    checkoutPage.finish();

    checkoutPage.confirmation().should("have.text", "Thank you for your order!");
  });
});
