Feature: Portal - Navigation
As a User
I want to see an easy-to-use navigation
So I can switch between pages	

  Scenario: Left hand navigation icons presence verification 
    Given I am logged in as a user
      And Dashboard page is loaded
     Then I should see Alerts Notifications icon 
      And I should see Messages icon
      And I should see Task List icon
