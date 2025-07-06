class LoginPage {
  visitar() {
    // Acessa a página principal do SauceDemo
    cy.visit("/");
  }

  preencherCredenciais(usuario, senha) {
    // Preenche os campos de login com os data-test selectors
    cy.get('[data-test="username"]').type(usuario);
    cy.get('[data-test="password"]').type(senha);
  }

  clicarBotao() {
    // Clica no botão de login
    cy.get('[data-test="login-button"]').click();
  }
}

export default new LoginPage();
