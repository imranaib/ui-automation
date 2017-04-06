Feature: Accounts - Naming
As a user
I want to see label 'Available funds' in the Current Account Card

  Scenario:	Precondition
    Given I am logged in as a user
      And Dashboard page is loaded
      And Account page is opened
      And Current Accounts are loaded
  
  Scenario Outline:	User sees label 'Available funds' in the Branch Banking Tile View
     When 	I click the toggle tile view button
     Then 	I can see label "<AVAILABLE FUNDS NAME>" in the "<ACCOUNT TYPE>" "<TILE INDEX>" account in Tile View
    Examples: 
      | ACCOUNT TYPE    | AVAILABLE FUNDS NAME | TILE INDEX |
      | currentaccounts | Available funds      | 2	    		|

  Scenario Outline: I select a Branch Banking Account to view it's details
    Given Transactions page is opened
    And Accounts are loaded
    Given I select an account with id "<Index>"
     Then I can see label "Available funds" label in the selected account in Account Selector
       Examples: 
      | Index | 
      | 1     |
