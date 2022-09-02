Feature: As a customer, I want to able to navigate to Smart Submissions website with signUp and Login

  @ss @ssPortalNavigation
  Scenario: As a customer, I want to able to navigate to Smart Submissions Portal
    Given I am on the "SmartSubmissions" ssPage
    When I click on "SignUpLink" ss
    Then I should see "SSLogo" ss
