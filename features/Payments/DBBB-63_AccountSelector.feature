Feature: Account Selector
As a user
I want to select an account,
so I can adjust the view of the page to fit this particular selected account.

  Scenario: Precondition
    Given I am logged in as a user
      And Dashboard page is loaded
      And Transactions page is opened
      And Accounts are loaded
  
  Scenario Outline: I select a Branch Banking Account to view it's details
    Given I select an account with id "<Index>"
     Then I should see the Account Name or Account Nickname as "<ACCOUNT>"
     Then I should see the Iban as "<IBAN>"
     Then I should see the Balance as "<BALANCE>"
     Then I should see the Currency of Balance as "<BALANCE CURRENCY>"
     Then I should see the Available Funds as "<AVAILABLE FUNDS>" 
     Then I should see the Currency of Available Funds as "<AF CURRENCY>"
    Examples: 
      | Index | ACCOUNT           | IBAN                | BALANCE     | BALANCE CURRENCY | AVAILABLE FUNDS | AF CURRENCY | 
      | 6     | Alias 1188        | 10581188            | £1,000.00   | £                | £0.00           | £           | 
      | 11    | Term Deposit 4463 |                     |             |                  | €0.00           | €           | 
    # | 52    | Loan-000          |                     |             | €                | €0.00           |             | Test Data needed


  Scenario Outline: I select a Credit Card to view it's details
    Given I select an account with id "<Index>"
     Then I should see the Account Name or Account Nickname as "<ACCOUNT>"
     Then I should see the Iban as "<IBAN>"
     Then I should see the Balance as "<REMAINING>"
     Then I should see the Currency of Balance as "<REMAINING CURRENCY>"
     Then I should see the Available Funds as "<BALANCE>" 
     Then I should see the Currency of Available Funds as "<BALANCE CURRENCY>"
    Examples: 
      | Index | ACCOUNT          | IBAN | REMAINING | REMAINING CURRENCY | BALANCE   | BALANCE CURRENCY | 
      | 8     | Credit Card 5700 |      | £1,200.00 | £                  | £8,800.00 | £                | 

