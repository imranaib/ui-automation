Feature: Filters
As a user
I want to filter data on ny accounts
In order to be able to easilyt access the needed data


 Scenario: Login
    Given I am logged in as a user
      And Dashboard page is loaded
      And Account page is opened
      And Current Accounts are loaded
      And I click the toggle table view button

  Scenario Outline: Filtering with checkboxes CurrentAccounts:<CURRENT_ACCOUNTS>, TeamDeposits:<TEAM_DEPOSITS>, Loans:<LOANS>, CreditCards:<CREDIT_CARDS>
    Given I open Filters Dropdown
     When I check Current Accounts as <CURRENT_ACCOUNTS>
      And I check Team Deposites as <TEAM_DEPOSITS>
      And I check Loans as <LOANS>
      And I check Credit Cards as <CREDIT_CARDS>
      And I click Apply button
     Then I should see Current Accounts result: <CURRENT_ACCOUNTS>
      And I should see Team Deposites result: <TEAM_DEPOSITS>
      And I should see Loans result: <LOANS>
      And I should see Credit Cards result: <CREDIT_CARDS>

    Examples:
      | CURRENT_ACCOUNTS | TEAM_DEPOSITS | LOANS | CREDIT_CARDS |
    # | -                | -             | -     | -            | covered in a separate scenario
      | -                | -             | -     | +            |
      | -                | -             | +     | -            |
      | -                | -             | +     | +            |
      | -                | +             | -     | -            |
      | -                | +             | -     | +            |
      | -                | +             | +     | -            |
      | -                | +             | +     | +            |
      | +                | -             | -     | -            |
      | +                | -             | -     | +            |
      | +                | -             | +     | -            |
      | +                | -             | +     | +            |
      | +                | +             | -     | -            |
      | +                | +             | -     | +            |
      | +                | +             | +     | -            |
      | +                | +             | +     | +            |


  Scenario: All filters unselected
    Given I open Filters Dropdown
     When I check Current Accounts as -
      And I check Team Deposites as -
      And I check Loans as -
      And I check Credit Cards as -
      And I click Apply button
     Then I should see Current Accounts result: +
      And I should see Team Deposites result: +
      And I should see Loans result: +
      And I should see Credit Cards result: +
