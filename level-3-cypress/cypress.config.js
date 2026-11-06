const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "../reports/cypress",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/commands.js",
    env: {
      apiUrl: "https://petstore.swagger.io/v2"
    }
  },
  video: true,
  screenshotOnRunFailure: true
});
