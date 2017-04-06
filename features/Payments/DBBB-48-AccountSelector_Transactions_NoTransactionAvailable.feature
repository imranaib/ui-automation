Feature: Transactions - No Transactions Available
As a user
I want to be notified visually, when no transactions are returned or available,
So I know what is going on

  Scenario: Precondition
    Given I am logged in as a user
      And Dashboard page is loaded
      And Transactions page is opened
      And Accounts are loaded

  Scenario Outline: Current Accounts - No Transactions available - Account Selector
    Given I select an account with id "<INDEX>"
     Then No transactions Message is shown:
  """
  Please be advised you do not have any transactions available for selected account. Please contact our customer service team to see what accounts can best suit your needs.
  """
    Examples: 
      | INDEX | 
      | 2     | 
      | 10    | 
      