import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";

Given('que estou na página inicial', (usuario) => {
  LoginPage.visitar();
  LoginPage.preencherCredenciais("standard_user", "secret_sauce");
  LoginPage.clicarBotao();
});

When('clico no menu lateral', () => {
  cy.get('.bm-burger-button').click();
});

When('clico no botão de logout', () => {
  cy.get('#logout_sidebar_link').click();
});

Then('devo voltar a página de login', () => {
  cy.url().should('include', 'https://www.saucedemo.com/');
  cy.get('[data-test="login-button"]').should('be.visible');
});