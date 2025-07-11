const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumber =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/pages/e2e.js",
    baseUrl: "https://www.saucedemo.com",   // alvo UI
    async setupNodeEvents(on, config) {
      // habilita Cucumber + esbuild
      await addCucumber(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    // todos os testes .feature ficarão aqui
    specPattern: "cypress/integration/**/*.feature",
    screenshotsFolder: "cypress/evidences",
    videosFolder: "cypress/evidences",
    video: true,          // gravações automáticas
  },
});
