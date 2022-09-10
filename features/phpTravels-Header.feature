Feature: As a customer, verify the header links in Travels(PHP)

  @php @phpHeader @phpPortalNavigation2
  Scenario: Verify we can able to navigate to the PHP travels portal
    Given I am on the "PHPTravels" phpPage2
    And I should see "HeaderText" php21
    #Then I should see "PHPTravelsLogo" php2

  @php @phpHeader @phpLanguages
  Scenario Outline: Verify we can able to click "drop down" link  for languages and it is working based on a language selection
    Given I am on the "PHPTravels" phpPage2
    #And I handle cookie alert popups php2
    #And I click on "Languages" php2
    And I selected "<Langvalue>" from "Languages" dropdown php2
    #And I click on "RussianLang" php2
    Then I should see "RussianLangHeader" php2
    Examples:
      | Langvalue |
      | Russian   |
      #| French    |
      #| Chinese   |

  @php @phpHeader @phpCurrency
  Scenario: Verify we can able to click "drop down" link  for currency and it is working based on a currency selection
    Given I am on the "PHPTravels" phpPage2
    #And I handle cookie alert popups php2
    And I click on "Currency" php2
    And I click on "IndianCurrency" php2
    Then I should see "CurrencyHeader" php2

