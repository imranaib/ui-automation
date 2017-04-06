Feature: Accounts - Accounts - Navigating to other widgets 
As a user
I want to easily navigate from my selected account to other functionalities of the portal
So that I can access the required information quickly

  Scenario:	Precondition
    Given I am logged in as a user
      And Dashboard page is loaded
  
  Scenario Outline: Accounts Page - Navigating to Transactions from Current Accounts
    Given Account page is opened
      And Current Accounts are loaded
     When I click on "transactions" icon of "currentaccounts" with index "1"
     Then I should land on "Transactions" Page
      And Accounts are loaded
     Then I should see the Iban as "<IBAN>"
     Then I should see the Balance as "<BALANCE>"
     Then I should see the Currency of Balance as "<BALANCE CURRENCY>"
     Then I should see the Available Funds as "<AVAILABLE FUNDS>" 
     Then I should see the Currency of Available Funds as "<AF CURRENCY>"
    Examples: 
      | IBAN     | BALANCE   | BALANCE CURRENCY | AVAILABLE FUNDS | AF CURRENCY | 
      | 10581188 | £1,000.00 | £                | £0.00           | £           | 
  
  Scenario Outline: Accounts Page - Navigating to Transactions from Credit Cards
    Given Account page is opened
      And Current Accounts are loaded
     When I click on "transactions" icon of "creditcards" with index "1"
     Then I should land on "Transactions" Page
      And Accounts are loaded
     Then I should see the Account Name or Account Nickname as "<ACCOUNT>"
     Then I should see the Balance as "<BALANCE>"
     Then I should see the Currency of Balance as "<BALANCE CURRENCY>"
     Then I should see the Available Funds as "<REMAINING>" 
     Then I should see the Currency of Available Funds as "<AF CURRENCY>"
    Examples: 
      | ACCOUNT          | REMAINING | BALANCE CURRENCY | BALANCE   | AF CURRENCY | 
      | Credit Card 5700 | £8,800.00 | £                | £1,200.00 | £           | 
  
  Scenario Outline: Accounts Page - Navigating to Transactions from Term Depostis
    Given Account page is opened
      And Current Accounts are loaded
     When I click on "transactions" icon of "termdeposits" with index "1"
     Then I should land on "Transactions" Page
      And Accounts are loaded
     Then I should see the Account Name or Account Nickname as "<ACCOUNT>"
     Then I should see the Available Funds as "<AVAILABLE FUNDS>"
    Examples: 
      | ACCOUNT           | AVAILABLE FUNDS | 
      | Term Deposit 4463 | €0.00           | 
  
  Scenario Outline: Accounts Page - Navigating to Transactions from Loans
    Given Account page is opened
      And Current Accounts are loaded
     When I click on "transactions" icon of "loans" with index "1"
     Then I should land on "Transactions" Page
      And Accounts are loaded
     Then I should see the Account Name or Account Nickname as "<ACCOUNT>"
     Then I should see the Available Funds as "<AVAILABLE FUNDS>"
    Examples: 
      | ACCOUNT   | AVAILABLE FUNDS | 
      | Loan 0001 | €0.00           | 
  
  Scenario Outline: Accounts Page - Navigating to Payments page from Current Accounts
    Given Account page is opened
      And Current Accounts are loaded
     When I click on "exchange" icon of "<ACCOUNT_TYPE>" with index "<INDEX>"
     Then I should land on "Payments" Page
    Examples: 
      | ACCOUNT_TYPE    | INDEX | 
      | currentaccounts | 1     | 
      | termdeposits    | 1     | 
      | loans           | 1     | 
