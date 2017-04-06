Feature: Logout - Logout button 
As a User, 
I  want to be able to see a logout button
So that I know I can press it to logout

  Scenario: Logout button presence verification 
    Given I am logged in as a user
      And Dashboard page is loaded
     Then User can see Logout button in the left-hand navigation
