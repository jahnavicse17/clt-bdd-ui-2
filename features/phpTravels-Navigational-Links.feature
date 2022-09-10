Feature: As a customer, verify the navigational links in Travels(PHP)

  @php @phpNavigational @phpPortalNavigation1
  Scenario: Verify we can able to navigate to the PHP travels portal
    Given I am on the "PHPTravels" phpPage1
    Then I should see "PHPTravelsLogo" php1

  @php @phpNavigational @phpBlog
  Scenario: Verify we can able to click blog link and can subscribe email
    Given I am on the "PHPTravels" phpPage1
    #And I handle cookie alert popups php1
    When I click on "Blog" php1
    And I handle cookie alert popups
    And I scroll for "ViewMore" element php1
    And I scroll for "Email" element php1
    When I Enter inputs for email address in SubscribetoSecretDeals php1
      | InputName | InputValue     |
      | Email     | yash1@bash.com |
    And I click on "subscribeBtn" php1
    #Then I should see "withoutEmailErr" php1
    #Then I should see "invalidEmailErr" php1
    #Then I should see "existingEmailErr" php1
    Then I should see "subscribedMessage" php1

  @php @phpNavigational @phpOffers
  Scenario Outline: Verify we can able to click blog link and can subscribe email
    Given I am on the "PHPTravels" phpPage1
    And I handle cookie alert popups php1
    When I click on "Offers" php1
    #And I handle cookie alert popups php1
    And I scroll for "Email" element php1
    When I Enter "<EmailValue>" address in "Email" php1
    And I click on "subscribeBtn" php1
    #Then I should see "withoutEmailErr" php1
    #Then I should see "invalidEmailErr" php1
    Then I should see "existingEmailErr" php1
    #Then I should see "subscribedMessage" php1
    Examples:
      | EmailValue  |
      | Janu1@a.com |

  @php @phpNavigational @phpAboutUs
  Scenario Outline: Verify we can able to click about us link
    Given I am on the "PHPTravels" phpPage1
    And I handle cookie alert popups php1
    When I click on "AboutUs" php1
    And I scroll for "Email" element php1
    When I Enter "<EmailValue>" address in "Email" php1
    And I click on "subscribeBtn" php1
    #Then I should see "withoutEmailErr" php1
    Then I should see "invalidEmailErr" php1
    #Then I should see "existingEmailErr" php1
    #Then I should see "subscribedMessage" php1
    Examples:
      | EmailValue |
      | Janu1      |

  @php @phpNavigational @phpTermsOfUse
  Scenario Outline: Verify we can able to click about us link
    Given I am on the "PHPTravels" phpPage1
    And I handle cookie alert popups php1
    When I click on "TermsOfUse" php1
    Then I should see "TermsOfUseHeader" php1
    And I scroll for "Email" element php1
    When I Enter "<EmailValue>" address in "Email" php1
    And I click on "subscribeBtn" php1
    Then I should see "withoutEmailErr" php1
    #Then I should see "invalidEmailErr" php1
    #Then I should see "existingEmailErr" php1
    #Then I should see "subscribedMessage" php1
    Examples:
      | EmailValue |
      |            |

  @php @phpNavigational @phpFAQ
  Scenario: Verify we can able to click about us link
    Given I am on the "PHPTravels" phpPage1
    #And I handle cookie alert popups
    When I click on "FAQ" php1
    Then I should see "FAQHeader" php1 

  @php @phpNavigational @phpHowToBook
  Scenario: Verify we can able to click about us link
    Given I am on the "PHPTravels" phpPage1
    #And I handle cookie alert popups
    When I click on "HowToBook" php1
    Then I should see "HowToBookHeader" php1







