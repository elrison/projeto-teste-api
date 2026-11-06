class CartPage {
  item(productName) {
    return cy.contains('[data-test="inventory-item"]', productName);
  }

  itemCount() {
    return cy.get('[data-test="cart-list"] .cart_item');
  }

  removeProduct(product) {
    cy.get(`[data-test="remove-${product}"]`).click();
  }

  continueShopping() {
    cy.get('[data-test="continue-shopping"]').click();
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }
}

module.exports = new CartPage();
