Feature: As a jootza customer, I want to be able to navigate to landing poage so that I can view product information

  @jootza @jootzaLoginHeader
  Scenario: Customer is displayed with jootza.com landing page
    Given I am on the "Jootza" portal
    When I click on "Login"
    Then I should see "LoginHeader"
    When I enter username "Test"
    And I enter password "Test"

  @jootza @jootzatest1
  Scenario: Customer is displayed with jootza.com landing page
    Given I am on the "Jootza" portal
    When I click on "Login"
    Then I should see "LoginHeader"
    When I enter username "Test"
    And I enter password "Test"

@jootza @jootzaRegister
  Scenario: Customer is displayed with jootza.com landing page
    Given I am on the Jootza portal
    When I click on "Register"
    Then I should see "RegisterHeader"

  @jootza @jootzaLogin
  Scenario: Customer is displayed with jootza.com landing page and tries to login into the portal
    Given I am on the "Jootza" portal
    And I enter the inputs for login
      | InputName | InputValue  |
      | username  | johndoe     |
      | password  | password123 |
    And I click on "LoginBtn"
    Then I should see "errorMessage"

  @jootza @checkApprover
  Scenario: Customer is logging into the jootza website to verify the approver name
    Given I am logged on to the Jootza portal as "kavithas"
    Then I should see the approver name as "ADMIN1, CLT"

  @jootza @checkApprover1
  Scenario: Customer is logging into the jootza website to verify the approver name
    Given I am logged on to the Jootza portal as "Shanuser12"
    Then I should see the approver name as "Adams, Jimmy"

  @jootza @soCheckApprover
  Scenario Outline: Customer is logging into the jootza website to verify the approver name
    Given I am logged on to the Jootza portal as "<Jootza Customer>""<Password>"
    Then I should see the approver name as "<approverName>"
    Examples:
      | Jootza Customer |Password|approverName |
      | kavithas        | demo1234|ADMIN1, CLT  |
      | Shanuser12      | demo1234|Adams, Jimmy |
      | jahnavis17      | demo1234|Adams, Jimmy |

  @jootza @jootzaRecordTimeHeader
  Scenario: Customer is displayed with jootza.com landing page
    Given I am on the "Jootza" portal
    When I click on "Login"
    When I enter username "jahnavis17"
    And I enter password "demo1234"
    And I click on "LoginBtn"
    Then I should see "RecordTimeHeader"

  @jootza @recordTime
  Scenario Outline: Customer is logging into the jootza website to record time
    Given I am on logged on to the Jootza portal as "<Jootza Customer>"
    And I enter notes field for days
      | FieldName      | FieldValue                      |
      | MondayNotes    | Worked on User story CLT-B3-009 |
      | TuesdayNotes   | Worked on User story CLT-B3-009 |
      | WednesdayNotes | Worked on User story CLT-B3-009 |
      | ThursdayNotes  | Worked on User story CLT-B3-009 |
      | FridayNotes    | Worked on User story CLT-B3-009 |
    And I click on  "LoginBtn"
#Then I should see "Timesheet Created"  Message