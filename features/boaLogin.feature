Feature: As a BOA customer, I want to be able to navigate to landing page
  @boa @boaLogin
  Scenario: Customer is displayed with bankofamerica.com landing page and Login
    Given I am on the "boaUrl" boa
    When I click on "LoginBtn" boa
    Then I should see "LoginHeader" boa