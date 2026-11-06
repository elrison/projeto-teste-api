class CheckoutPage {
  fillInformation(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  confirmation() {
    return cy.get('[data-test="complete-header"]');
  }
}

module.exports = new CheckoutPage();
