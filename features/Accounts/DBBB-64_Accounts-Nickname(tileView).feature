Feature: Accounts - Nickname
    As a user
    when I have provided a nickname for my account, I want to see that nickname
    so I can easily differentiate between accounts

Scenario: Preconditions
    Given I am logged in as a user
	  And Dashboard page is loaded
	  And Account page is opened
      And Current Accounts are loaded

Scenario Outline: Accounts shuold have name or nickname displayed on tile view
	 Then I see account tile number "<INDEX>" should have "<TITLE>"
	Examples:
		| INDEX	| TITLE 			|
		| 	3	| Alias 5602		|
		| 	4	| Alias 5603 		|
	
	
	# TestData - we need the following test data with described characteristics
	# 	Examples:
	# 	| INDEX	| TITLE 										|
	# 	| 	6	| Non empty alias and name does not exist		|
	# 	| 	7	| Non empty alias and name is empty string		|
	# 	| 	8	| Non empty name and alias does not exist		|
	# 	| 	9	| Non empty name and alias is empty string		|
