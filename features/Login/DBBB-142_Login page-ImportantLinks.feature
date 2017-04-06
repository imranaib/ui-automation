Feature: Login page - Important Links
As a User, on the login page
I want to be able to navigate to other pages easily
So that I can ingest more information about the secure login from AIB

  Scenario: Terms & conditions link verification
    Given User is on login page
      And User can see Terms and conditions link in the footer of the Login page as "Terms and conditions"
     When User clicks on the Terms & conditions link
     Then Terms & conditions link "http://business.aib.ie/ibb-tcs-to-take-effect-from-the-09th-March-2015.pdf" opens in the tab number "1"
      And User closes the current tab

  Scenario: Privacy Policy link verification
    Given User is on login page
      And User can see Privacy Policy link in the footer of the Login page as "Privacy Policy"
     When User clicks on the Privacy Policy link
     Then Privacy Policy link "http://business.aib.ie/privacy-statement" opens in the tab number "1"
      And User closes the current tab

  Scenario: Fraud Prevention Page link verification
    Given User is on login page
      And User can see Fraud Prevention Page link in the footer of the Login page as "Fraud Prevention Page"
     When User clicks on the Fraud Prevention Page link
     Then Fraud Prevention Page link "http://business.aib.ie/security-centre/how-do-you-prevent-fraud" opens in the tab number "1"
      And User closes the current tab

  Scenario: Security Pages link verification
    Given User is on login page
      And User can see Security Pages link in the footer of the Login page as "Security Pages"
     When User clicks on the Security Pages link
     Then Security Pages link "http://business.aib.ie/security-centre" opens in the tab number "1"
      And User closes the current tab
  
  Scenario: Legal Pages link verification
    Given User is on login page
      And User can see Legal Pages link in the footer of the Login page as "Legal Pages"
     When User clicks on the Legal Pages link
     Then Legal Pages link "http://business.aib.ie/legal" opens in the tab number "1"
      And User closes the current tab