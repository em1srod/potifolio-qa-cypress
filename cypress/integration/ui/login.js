import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";

Given("que estou na página de login", () => {
  LoginPage.visitar();
});

When("informo o usuário e a senha válidos", () => {
  LoginPage.preencherCredenciais("standard_user", "secret_sauce");
});

When("clico no botão de login", () => {
  LoginPage.clicarBotao();
});

Then("devo ver a página de produtos", () => {
  cy.get(".inventory_list").should("be.visible");
});
