Feature: As a customer, I want to able to navigate to Smart Submissions website with signUp and Login 

 @ss @ssPortalNavigation
 Scenario: As a customer, I want to able to navigate to Smart Submissions Portal
   Given I am on the "SmartSubmissions" Page
   When I click on "SignUpLink" 
   Then I should see "SSLogo"

@ss @ssSignUpPage
 Scenario: As a customer, I want to enter user details in the SignUp Page
   Given I am on the "SignUpLink" Page
   When I enter the inputs 
      |InputName|InputValue |
      |FirstName|yash|
      |LastName|bash| 
      |Email|yash@bash.com|
      |MobileNo|0123456789|
      |Password|yashbash@1234|
      |ConfirmPwd|yashbash@1234|
   And I click on "AgreeTermsCheckBox" 
   And I click on "RegisterBtn"
   Then I should see "RegisterSuccess" 

 @ss @ssUserAlreadyExists
 Scenario: As a customer, I want to enter user details in the SignUp Page
   Given I am on the "SignUpLink" Page
   When I enter the inputs 
      |InputName|InputValue |
      |FirstName|yash|
      |LastName|bash| 
      |Email|yash@bash.com|
      |MobileNo|0123456789|
      |Password|yashbash@1234|
      |ConfirmPwd|yashbash@1234|
   And I click on "AgreeTermsCheckBox" 
   And I click on "RegisterBtn"
   Then I should see "UserExistsErrMessage" 
   
  @ss @ssLoginPage
  Scenario: As a customer, I want to navigate to the Login Page
    Given I am on the "SignUpLink" Page
    When I click on "LoginBtnInSignUpPage"
    And I enter the inputs
      |InputName|InputValue|
      |Email|ya@ba.com|
      |Password|yaba@1234|
    And I click on "LOGINBtnInLoginPage"
    Then I should see "LoginErr"