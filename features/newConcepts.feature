Feature: As a customer, I want to be able to navigate to selniumhq landing page and download a file

    @sel @selhqNavigation
    Scenario: Customer is displayed with seleniumhq.com landing page
        Given I am on the "SelHQ" portal bdd
        Then I should see "SelHQHeader"

    @sel @selHQDownload
    Scenario: Customer is displayed with seleniumhq.com landing page
        #Given I am on the "SelHQ" portal bdd
        #And I click on "DownloadVersion" and saved to local folder bdd
        Given I am on the "SelHQ" portal and I click on "DownloadVersion" and saved to local folder bdd

    @ap @apMouseHover
    Scenario Outline: As a user I want to mouse over the Women Tab and navigate to all the links under Women tab
        Given I am on the "AutomationPractice" portal bdd
        When I hover on "<TabSelector>" to go to "<Title>" bdd
        Then I should see "<Header>" bdd
        Examples:
            | TabSelector              | Header                 | Title          |
            | APTopsTabSelector        | APTopsHeader           | Tops           |
            | APTShirtsSelector        | APTShirtsHeader        | TShirts1       |
            | APBlousesSelector        | APBlousesHeader        | Blouses        |
            | APDressesSelector        | APDressesHeader        | Dresses        |
            | APCasualDressesSelector  | APCasualDressesHeader  | CasualDresses  |
            | APEveningDressesSelector | APEveningDressesHeader | EveningDresses |
            | APSummerDressesSelector  | APSummerDressesHeader  | SummerDresses  |

    @ap @apLandingPage @apSwitchToTab
    Scenario Outline: As a user I want to check if I can go to facebook from the footer section of Landing Page
        Given I am on the "AutomationPractice" portal bdd
        When I scroll for "APScrollToFooter" element bdd
        And I click on "<Link>" I should see a new window with "<Header>" bdd
        Examples:
            | Link            | Header              |
            #| FooterBlk2Link1 | FooterFacebookHeader |
            #| FooterBlk2Link2 | FooterTwitterHeader  |
            | FooterBlk2Link3 | FooterYouTubeHeader |
    #| FooterBlk2Link4 | FooterGoogleHeader   |
    #| EmailLink       | Emailheader          |

    @ap @apFileUpload
    Scenario: As a user I want to navigate to Contact Us Page by clicking the Contact Us tab at the top right of all Pages
        Given I am on the "APContactUsPage" portal bdd
        When I enter "Customer Service" in the "APContactUsSubjHeadDropBox" bdd
        And I enter "hyuji@test.com" in the "APContactUsEmail" bdd
        And I enter "123567" in the "APContactUsOrderReference" bdd
        And I enter "Hello" in the "APContactUsMessage" bdd
        Then I enter filepath in the "APContactUsFileAttachBox" and click "APContactUsSendBtn" to see "APContactUsResponseSuccess" bdd

    @ap @apVerifyEmailWithOutlook
    Scenario: As a user I want to scroll down the Landing Page Footer section and verify the Email link works
        Given I am on the "AutomationPractice" portal bdd
        When I scroll for "APScrollToEmail" element bdd
        Then I verify "APEmailLink" bdd

    @sel @selMultiSelectComboBox
    Scenario: As a user, I want to select multiple options at once
        Given I am on the "HSScripts" portal bdd
        When I scroll for "MultiSelect" element bdd
        Then I selected "MultiSelectOptions" bdd

    @sel @selDragAndDrop
    Scenario: As a user, I want to drag(source) element in the drop(target)
        Given I am on the "jQuery" portal bdd
        And I did "DragAndDrop" bdd

    @sel @selCertErrors
    Scenario: As a user, I want to rectify certificate errors in browser(Firefox)
        Given I am on the "Hotmail" and rectified certificate errors bdd

    @sel @windowPopup
    Scenario: As a user, I want to move to window popup and do some action
        Given I am on the "LICSITE" portal bdd
        When I scroll for "LICContactUS" element bdd
        And I click on "LICContactUS" I should see a new window popup with "DelhiContacts" bdd
