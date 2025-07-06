Feature: Logout seguro no SauceDemo

  @smoke
  Scenario: Usuário encerra a sessão
    Given que estou na página inicial
    When clico no menu lateral
    And clico no botão de logout
    Then devo voltar a página de login