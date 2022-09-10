Feature: As a customer, verify the whether we can able to book the flight to particular destination or not in Travels(PHP)

  @php @phpHotels @phpPortalNavigation4
  Scenario: Verify we can able to navigate to the PHP travels portal
    Given I am on the "PHPTravels" phpPage4
    Then I should see "PHPTravelsLogo" php4

  @php @phpHotels @phpOneWayFlightSearchWithOutDetails
  Scenario: Verify we can able to search flights without any details(One Way)
    Given I am on the "PHPTravels" phpPage4
    And I click on "Flights" php4
    And I click on "TicketType" php4
    And I click on "OneWay" php4
    When I click on "FlyingFrom" php4
    When I click on "ToDestination" php4
    When I click on "DepartureDate" without input php4
    And I click on "Passengers" without details php4
    And I click on "SearchBtn" php4
    Then I should see alertmsg popup php4

  @php @phpHotels @phpOneWayFlightSearchWithDetails
  Scenario Outline: Verify we can able to search flights with details(One Way)
    Given I am on the "PHPTravels" phpPage4
    And I click on "Flights" php4
    And I click on "TicketType" php4
    And I click on "OneWay" php4
    When I Enter FlyingFrom input "<FlyingFrom>" in "FlyingFrom" php4
    When I Enter ToDestination input "<ToDestination>" in "ToDestination" php4
    When I Enter DepartureDate input "<DepartureDate>" in "DepartureDate" php4
    And I click on "Passengers" and click off php4
    #And I click on "Passengers" and "Adults" and "Childs" php4
    And I click on "SearchBtn" php4
    Then I should see "TotalFlights" php4
    #Then I should see "TotalFlights" and "LoginToBook" php4
    #And I handle cookie alert popups php4
    Examples:
      | FlyingFrom | ToDestination | DepartureDate |
      | JFK        | MAA           | 08-09-2022    |

  @php @phpHotels @phpRoundTripFlightSearchWithOutDetails
  Scenario: Verify we can able to search flights without any details(Round Trip)
    Given I am on the "PHPTravels" phpPage4
    And I click on "Flights" php4
    And I click on "TicketType" php4
    And I click on "RoundTrip" php4
    When I click on "FlyingFrom" php4
    When I click on "ToDestination" php4
    When I click on "DepartureDate" without departureinput php4
    When I click on "ReturnDate" without returninput php4
    And I click on "Passengers" without passengerdetails php4
    And I click on "SearchBtn" php4
    Then I should see alertmsg popup php4

  @php @phpHotels @phpRoundTripFlightSearchWithDetails
  Scenario Outline: Verify we can able to search flights with details(Round Trip)
    Given I am on the "PHPTravels" phpPage4
    And I click on "Flights" php4
    And I click on "TicketType" php4
    And I click on "RoundTrip" php4
    When I Enter FlyingFrom input "<FlyingFrom>" in "FlyingFrom" php4
    When I Enter ToDestination input "<ToDestination>" in "ToDestination" php4
    When I Enter DepartureDate input "<DepartureDate>" in "DepartureDate" php4
    When I Enter ReturnDate input "<ReturnDate>" in "ReturnDate" php4
    And I click on "Passengers" and click off php4
    #And I click on "Passengers" and "Adults" and "Childs" php4
    And I click on "SearchBtn" php4
    #Then I should see "TotalFlights" php4
    Then I should see "TotalFlights" and "BookNow" php4
    And I handle cookie alert popups php4
    And I click on "ModifySearch" php4
    When I Enter FlyingFrom input "<FlyingFromInModify>" in "FlyingFrom" php4
    When I Enter ToDestination input "<ToDestinationInModify>" in "ToDestination" php4
    And I click on "PassengersInModify" and click off php4
    And I click on "SearchBtnInModify" php4
    #And I click on "BackToSearch" php4
    Then I should see "TotalFlights" and "BookNow" php4
    Examples:
      | FlyingFrom | ToDestination | DepartureDate | ReturnDate | FlyingFromInModify | ToDestinationInModify |
      | JFK        | MAA           | 08-09-2022    | 10-9-2022  | LAX                | BLR                   |
    
  @php @phpHotels @phpNeedHelpContactUs
  Scenario Outline: Verify we can able to navigate to 'Need Help? Contact us' link in the footer
    Given I am on the "PHPTravels" phpPage4
    And I handle cookie alert popups php4
    And I click on "Flights" php4
    #And I handle cookie alert popups php4
    And I scroll for "ViewMore" element php4
    And I scroll for "NeedHelpContactUs" element php4
    And I click on "NeedHelpContactUs" php4
    When I Enter input "<YourName>" in "YourName" php4
    When I Enter input "<YourEmail>" in "YourEmail" php4
    When I Enter input "<Message>" in "Message" php4
    And I click on "RobotCheckBox" php4
    And I click on "Send" php4
    Then I should see "SuccessMsg" php4
    Examples:
      | YourName | YourEmail       | Message |
      | Janu     | Janu@google.com | Hello   |
