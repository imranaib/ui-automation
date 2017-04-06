Feature: Login page - Login fields 
As a user
I want to login to the application, 
So I can access my secure informations easily	

  Scenario Outline: Successful Login
    Given User is on the Login page
      And User enters "<USERID>" into the User ID field
      And User enters "<PASSWORD>" into the Password field
      And User enters "<OTC>" into the One-Time Code field
     When User clicks on the Log-in button
     Then I should land on Home Page
      And Dashboard page is loaded
     When User clicks Logout button
      And Logout confirmation message popped-up
     Then User clicks on Confirm Logout button
  Examples:
     | USERID   | PASSWORD     | OTC               | 
     | HELEN025 | abcd12345678 | secondFactorToken |
     | LUCCA121 | abcd1234     | secondFactorToken |
     | ROGIER01 | 1234         | secondFactorToken |
