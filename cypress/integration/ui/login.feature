Feature: Login seguro no SauceDemo

  @smoke
  Scenario: Login com usuário válido
    Given que estou na página de login
    When informo o usuário e a senha válidos
    And clico no botão de login
    Then devo ver a página de produtos
