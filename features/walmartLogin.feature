Feature: As a walmart customer, I want to be able to navigate to landing page

  @walmart @walmartLogin
  Scenario: Customer is displayed with walmart.com landing page
    Given I am on the "walmartUrl" walmart
    When I move on "SignInMove" walmart
    And I click on "SignInBtn" walmart
    Then I should see "LoginHeader" walmart

