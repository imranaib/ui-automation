Feature: Account Selector
As a user
I want to be able to search on transactions from one account,
so I can easily find the information I was looking for

  Scenario: Precondition
    Given I am logged in as a user
      And Dashboard page is loaded
      And Transactions page is opened
      And Accounts are loaded
      And I select an account with id "8"

  Scenario Outline: Search
     When I enter "<SEARCHCRITERIUM>" into the search filed
     When I click search transactions button
     Then I shuld see "<SEARCHCRITERIUM>" reusult displayed in the transactions table
     Examples:
      | SEARCHCRITERIUM |
      | SEPA            |
      | SHANKHA2        |
      | SW              |

   # Negative cases
      # | 14     |
      # |        |
      # | Sw     |

      