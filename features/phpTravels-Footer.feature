Feature: As a customer, verify the header links in Travels(PHP)

  @php @phpFooter @phpPortalNavigation3
  Scenario: Verify we can able to navigate to the PHP travels portal
    Given I am on the "PHPTravels" phpPage3
    Then I should see "PHPTravelsLogo" php3

  @php @phpFooter @phpTravelInfo
  Scenario: Verify we can able to click 'info@travelagency.com' in the footer of home page and outlook is opening
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "TravelInfo" element php3
    And I handle cookie alert popups php3
    And I click on "TravelInfo" php3

  @php @phpFooter @phpContactUs
  Scenario Outline: Verify we can able to click 'Contact Us' link in the footer of home page
    Given I am on the "PHPTravels" phpPage3
    And I scroll for "ContactUs" element php3
    And I handle cookie alert popups php3
    And I click on "ContactUs" php3
    When I Enter input "<YourName>" in "YourName" php3
    When I Enter input "<YourEmail>" in "YourEmail" php3
    When I Enter input "<Message>" in "Message" php3
    And I click on "RobotCheckBox" php3
    And I click on "Send" php3
    Then I should see "SuccessMsg" php3
    Examples:
      | YourName | YourEmail       | Message |
      | Janu     | Janu@google.com | Hello   |

  @php @phpFooter @phpTermsOfUse
  Scenario: Verify we can able to click 'Terms of Use' in the footer of home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "TermsOfUse" element php3
    And I handle cookie alert popups php3
    And I click on "TermsOfUse" php3
    Then I should see "TermsOfUseHeader" php3

  @php @phpFooter @phpBecomeSupplier
  Scenario: Verify we can able to click 'Become Supplier' in the footer of the home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "BecomeSupplier" element php3
    And I handle cookie alert popups php3
    And I click on "BecomeSupplier" php3
    Then I should see "BecomeSupplierHeader" php3

  @php @phpFooter @phpFindaClaim
  Scenario: Verify we can able to click 'Find a Claim' in the footer of the home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "FindaClaim" element php3
    And I handle cookie alert popups php3
    And I click on "FindaClaim" php3
    Then I should see "FindaClaimHeader" php3

  @php @phpFooter @phpLastMinuteDeals
  Scenario: Verify we can able to click 'Last Minute Deals' in the footer of the home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "LastMinuteDeals" element php3
    And I handle cookie alert popups php3
    And I click on "LastMinuteDeals" php3
    Then I should see "LastMinuteDealsHeader" php3

  @php @phpFooter @phpAddYourBusiness
  Scenario: Verify we can able to click 'Add Your Business' in the footer of the home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "AddYourBusiness" element php3
    And I handle cookie alert popups php3
    And I click on "AddYourBusiness" php3
    Then I should see "AddYourBusinessHeader" php3

    @php @phpFooter @phpCareersAndJobs
  Scenario: Verify we can able to click 'Careers And Jobs' in the footer of the home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "CareersAndJobs" element php3
    And I handle cookie alert popups php3
    And I click on "CareersAndJobs" php3
    Then I should see "CareersAndJobsHeader" php3

    @php @phpFooter @phpTravelsV8Link
  Scenario: Verify we can able to click 'PHP Travels V8 Link' in the footer of the home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "PHPTravelsV8Link" element php3
    And I handle cookie alert popups php3
    And I click on "PHPTravelsV8Link" php3
    Then I should see "PHPTravelsV8LinkHeader" php3

    @php @phpFooter @phpSocialMedia
  Scenario: Verify we can able to click 'Social Media Links' in the footer of the home page
    Given I am on the "PHPTravels" phpPage3
    #And I scroll for "ViewMore" element php3
    And I scroll for "SocialMedia" element php3
    And I handle cookie alert popups php3
    And I click on "SocialMedia" php3
    Then I should see "SocialMediaHeader" php3