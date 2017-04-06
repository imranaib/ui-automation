Feature: Togglig table and Tile viewes
    As a user
    I want to navigate to other screens easily
    So I can easily navigate through application

Scenario: Login
    Given I am logged in as a user
      And Dashboard page is loaded
      And Account page is opened
      And Current Accounts are loaded

Scenario: Toggle table and tile views
    Given The view is set to tiles by default
    When I click the toggle table view button
    Then I should see table view

Scenario: Toggle tile view
    Given I should see table view
    When I click the toggle tile view button
    Then I should see tile view
