Feature: As a customer, I want to able to navigate to Smart Submissions website with signUp and Login

  @ss @ssPortalNavigation
  Scenario: As a customer, I want to able to navigate to Smart Submissions Portal
    Given I am on the "SmartSubmissions" ssPage
    When I click on "SignUpLink" ss
    Then I should see "SSLogo" ss

  @ss @ssWithOutDetailsValErrsInSignUpPage
  Scenario Outline: As a customer, I want to check validations without the user details in the SignUp Page
    Given I am on the "SignUpLink" ssPage
    And I click on "Recruiter" ss
    When there are no inputs entered ss
      | InputName | InputValue |
    And I click on "AgreeTermsCheckBox" ss
    And I click on "RegisterBtn" ss
    Then I should see "<AccessCodeErr>""<CompanyNameErr>""<FirstNameErr>""<LastNameErr>""<EmailErr>""<PasswordErr>""<ConfirmPwdErr>" ss1
    Examples:
      |AccessCodeErr|CompanyNameErr|FirstNameErr|LastNameErr|EmailErr|PasswordErr|ConfirmPwdErr|
      |AccessCodeErr|CompanyNameErr|FirstNameErr|LastNameErr|EmailErr|PasswordErr|ConfirmPwdErr|
      
  @ss @ssRecruiterSignUpPage
  Scenario Outline: As a customer, I want to enter recruiter user details in the SignUp Page
    Given I am on the "SignUpLink" ssPage
    And I click on "Recruiter" ss
    When I enter the inputs "<AccessCode>""<CompanyName>""<FirstName>""<LastName>""<Email>""<MobileNo>""<Password>""<ConfirmPwd>" ss1
    And I click on "AgreeTermsCheckBox" ss
    And I click on "RegisterBtn" ss
    Then I should see "RecRegistrationErr" ss
    Examples:
    |AccessCode|CompanyName|FirstName|LastName|Email|MobileNo|Password|ConfirmPwd|
    |AccessCode|CompanyName|FirstName|LastName|Email|MobileNo|Password|ConfirmPwd|

  @ss @ssJobSeekerSignUpPage
  Scenario: As a customer, I want to enter job seeker user details in the SignUp Page
    Given I am on the "SignUpLink" ssPage
    And I click on "JobSeeker" ss
    When I enter the inputs ss
      | InputName  | InputValue|
      | FirstName  | Janavi1234|
      | LastName   | Sm1234|
      | Email      | JhSom123@gmail.com|
      | MobileNo   | 0123456789|
      | Password   | yasbash121@1234|
      | ConfirmPwd | yasbash121@1234|
    And I click on "AgreeTermsCheckBox" ss
    And I click on "RegisterBtn" ss
    Then I should see "RegisterSuccess" ss

  @ss @ssUserAlreadyExists
  Scenario: As a customer, I want to check whether user already exists or not with existing user details.
    Given I am on the "SignUpLink" ssPage
    When I enter the inputs ss
      | InputName  | InputValue    |
      | FirstName  | yash          |
      | LastName   | bash          |
      | Email      | yash@bash.com |
      | MobileNo   | 0123456789    |
      | Password   | yashbash@1234 |
      | ConfirmPwd | yashbash@1234 |
    And I click on "AgreeTermsCheckBox" ss
    And I click on "RegisterBtn" ss
    Then I should see "UserExistsErrMessage" ss

  @ss @ssLoginPage
  Scenario: As a customer, I want to navigate to the Login Page and click the Login button with user details.
    Given I am on the "SignUpLink" ssPage
    When I click on "LoginBtnInSignUpPage" ss
    And I enter the inputs ss
      | InputName | InputValue |
      | Email     | ya@ba.com  |
      | Password  | yaba@1234  |
    And I click on "LOGINBtnInLoginPage" ss
    Then I should see "ErrAfterLoginwithDetails" ss

  @ss @ssWithOutDetailsValErrsInLoginPage
  Scenario: As a customer, I want to check validations without entering user details
    Given I am on the "LoginLink" ssPage
    When there are no inputs entered ss
      | InputName | InputValue |
      | Email     |            |
      | Password  |            |
    And I click on "LOGINBtnInLoginPage" ss
    Then I should see "EmailErrVal" ss
    And I should see "PwdErrVal" ss

  @ss @ssForgetPasswordLink
  Scenario: As a customer, I want to click forget password link and see Header of it
    Given I am on the "LoginLink" ssPage
    When I click on "ForgetPwdLink" ss
    Then I should see "ForgetPwdHeader" ss

  @ss @ssForgetPasswordErrVal
  Scenario: As a customer, I want to click validations in forget password link without entering details
    Given I am on the "LoginLink" ssPage
    When I click on "ForgetPwdLink" ss
    When there are no inputs entered ss
      | InputName | InputValue |
      | EmailInForgetPwd | |
    And I click on "SendEmailButton" ss
    Then I should see "EmailErrInForgetPwd" ss
    #And I should see "InValidEmailInForgetPwd"
    And I click on "BackToLogin" ss

    @ss @ssResetPwd
  Scenario: As a customer, I want to reset pwd by entering valid detail in forget password link
    Given I am on the "LoginLink" ssPage
    When I click on "ForgetPwdLink" ss
    When I enter the inputs ss
      | InputName | InputValue |
      | EmailInForgetPwd |abc@def.com|
    And I click on "SendEmailButton" ss
    Then I should see "PwdResetLink" ss