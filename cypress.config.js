const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    base_url: 'https://www.demoblaze.com/',
    api_base_url: 'https://api.demoblaze.com',
  },
});
