Feature: Account Selector
As a user
I want to be see a list of my transactions,
so I know what has happened on my account.

  Scenario: Precondition
    Given I am logged in as a user
      And Dashboard page is loaded
      And Transactions page is opened
      And Accounts are loaded
  
  Scenario Outline: View transactions list for Current Account
    Given I select an account with id "<AccID>"
     When I select a transaction with ID "<TrID>"
     Then I should see the transaction's "<TrID>" title as "<DESCRIPTION>"
     Then I should see the transaction's "<TrID>" additional information as "<INFO>"
     Then I should see the transaction's "<TrID>" amount as "<AMOUNT>"
     Then I should see the transaction's "<TrID>" currency as "<CURRENCY>"
     Then I should see the transaction's "<TrID>" date as "<DATE>"
     Then I should see the transaction's "<TrID>" type as "<TYPE>"
     Then I should see the transaction's "<TrID>" Payment Reference ID as "<RefID>"
    Examples: 
      | AccID | TrID | DESCRIPTION                         | DATE    | INFO                                | AMOUNT      | CURRENCY | TYPE    | RefID             | 
      | 1     | 1    | SEPA DD 170170004 147851248 1004583 | Jan\n06 | 0ED4GWGEX9NX57NU NH1324798 DDD03600 | €9,410.00   | €        | SEPA CT | 0ED4GWGEX9NX57NU  | 
      | 8     | 1    | SEPA DD 170170004 147851248 1004583 | Jan\n06 | 0ED4GWGEX9NX57NU NH1324798 DDD03600 | €9,410.00   | €        | SEPA CT | 0ED4GWGEX9NX57NU  | 
      | 11    | 2    | IBSOSCT170170003 DWK 124578 FG12455 | Jan\n01 | DBBE1254789654 KKPPW 000124 0799981 | -€2,334.00  | €        | SEPA CT | DBBE1254789654    | 
      
          # Current accounts: 1 - 15
          # Credit Cards:     16 - 46
          # Term Deposits:    47 - 52
          # Loans:            53   