class InventoryPage {
  title() {
    return cy.get('[data-test="title"]');
  }

  addProduct(product) {
    cy.get(`[data-test="add-to-cart-${product}"]`).click();
  }

  removeProduct(product) {
    cy.get(`[data-test="remove-${product}"]`).click();
  }

  cartLink() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  cartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]');
  }
}

module.exports = new InventoryPage();
