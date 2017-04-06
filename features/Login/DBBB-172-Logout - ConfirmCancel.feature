Feature: Logout -  Confirm/Cancel 
As a user
I want to confirm or cancel my logout request, 
So I can ensure I don't proceed with any unwanted action or be properly logged out

  Scenario: Prerequisites
    Given I am logged in as a user
      And Dashboard page is loaded
  
  Scenario: Cancel action in the Logout confirmation message pop-up window
     When User clicks Logout button
      And Logout confirmation message popped-up
     When User clicks on Cancel button
     Then User stays on the Dashboard page
  
  Scenario: Logout action in the Logout confirmation message pop-up window
     When User clicks Logout button
      And Logout confirmation message popped-up
     When User clicks on Confirm Logout button
     Then User is redirected to login page
      And User can't access accounts page in closed environment
      