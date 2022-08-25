Feature: As a customer, I want to able to navigate to Smart Submissions website with signUp and Login

  @ss @ssPortalNavigation
  Scenario: As a customer, I want to able to navigate to Smart Submissions Portal
    Given I am on the "SmartSubmissions" Page
    When I click on "SignUpLink"
    Then I should see "SSLogo"

  @ss @ssWithOutDetailsValErrsInSignUpPage
  Scenario: As a customer, I want to check validations without the user details in the SignUp Page
    Given I am on the "SignUpLink" Page
    And I click on "Recruiter"
    When there are no inputs entered
      | InputName | InputValue |
    And I click on "AgreeTermsCheckBox"
    And I click on "RegisterBtn"
    Then I should see "AccessCodeErr"
    And I should see "CompanyNameErr"
    And I should see "FirstNameErr"
    And I should see "LastNameErr"
    And I should see "EmailErr"
    And I should see "PasswordErr"
    And I should see "ConfirmPwdErr"

  @ss @ssRecruiterSignUpPage
  Scenario: As a customer, I want to enter recruiter user details in the SignUp Page
    Given I am on the "SignUpLink" Page
    And I click on "Recruiter"
    When I enter the inputs
      | InputName   | InputValue         |
      | AccessCode  | 01234              |
      | CompanyName | IBM                |
      | FirstName   | Jahnavi123         |
      | LastName    | Som123             |
      | Email       | JahSom12@gmail.com |
      | MobileNo    | 0123456789         |
      | Password    | yashbash11@1234    |
      | ConfirmPwd  | yashbash11@1234    |
    And I click on "AgreeTermsCheckBox"
    And I click on "RegisterBtn"
    Then I should see "RecRegistrationErr"

  @ss @ssJobSeekerSignUpPage
  Scenario: As a customer, I want to enter job seeker user details in the SignUp Page
    Given I am on the "SignUpLink" Page
    And I click on "JobSeeker"
    When I enter the inputs
      | InputName  | InputValue|
      | FirstName  | Janavi1234|
      | LastName   | Sm1234|
      | Email      | JhSom123@gmail.com|
      | MobileNo   | 0123456789|
      | Password   | yasbash121@1234|
      | ConfirmPwd | yasbash121@1234|
    And I click on "AgreeTermsCheckBox"
    And I click on "RegisterBtn"
    Then I should see "RegisterSuccess"

  @ss @ssUserAlreadyExists
  Scenario: As a customer, I want to check whether user already exists or not with existing user details.
    Given I am on the "SignUpLink" Page
    When I enter the inputs
      | InputName  | InputValue    |
      | FirstName  | yash          |
      | LastName   | bash          |
      | Email      | yash@bash.com |
      | MobileNo   | 0123456789    |
      | Password   | yashbash@1234 |
      | ConfirmPwd | yashbash@1234 |
    And I click on "AgreeTermsCheckBox"
    And I click on "RegisterBtn"
    Then I should see "UserExistsErrMessage"

  @ss @ssLoginPage
  Scenario: As a customer, I want to navigate to the Login Page and click the Login button with user details.
    Given I am on the "SignUpLink" Page
    When I click on "LoginBtnInSignUpPage"
    And I enter the inputs
      | InputName | InputValue |
      | Email     | ya@ba.com  |
      | Password  | yaba@1234  |
    And I click on "LOGINBtnInLoginPage"
    Then I should see "ErrAfterLoginwithDetails"

  @ss @ssWithOutDetailsValErrsInLoginPage
  Scenario: As a customer, I want to check validations without entering user details
    Given I am on the "LoginLink" Page
    When there are no inputs entered
      | InputName | InputValue |
      | Email     |            |
      | Password  |            |
    And I click on "LOGINBtnInLoginPage"
    Then I should see "EmailErrVal"
    And I should see "PwdErrVal"

  @ss @ssForgetPasswordLink
  Scenario: As a customer, I want to click forget password link and see Header of it
    Given I am on the "LoginLink" Page
    When I click on "ForgetPwdLink"
    Then I should see "ForgetPwdHeader"

  @ss @ssForgetPasswordErrVal
  Scenario: As a customer, I want to click validations in forget password link without entering details
    Given I am on the "LoginLink" Page
    When I click on "ForgetPwdLink"
    When there are no inputs entered
      | InputName | InputValue |
      | EmailInForgetPwd | |
    And I click on "SendEmailButton"
    Then I should see "EmailErrInForgetPwd"
    #And I should see "InValidEmailInForgetPwd"
    And I click on "BackToLogin"

    @ss @ssResetPwd
  Scenario: As a customer, I want to reset pwd by entering valid detail in forget password link
    Given I am on the "LoginLink" Page
    When I click on "ForgetPwdLink"
    When I enter the inputs
      | InputName | InputValue |
      | EmailInForgetPwd |abc@def.com|
    And I click on "SendEmailButton"
    Then I should see "PwdResetLink"