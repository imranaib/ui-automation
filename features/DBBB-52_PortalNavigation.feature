Feature: Portal - Navigation
As a user
I want to see an easy-to-use navigation
So I can switch between pages

 Scenario: 	Non-functional left hand navigation icons presence
  Given   I am logged in as a user
    And   Dashboard page is loaded
	 Then 	I should see only following menu items
		|MenuItems	   		|
		|Homepage		    	|
		|Accounts	  	   	|
		|Transactions  		|
		|Payments		    	|
		|Beneficiaries		|
		|Profile Settings	|
		|Alerts			    	|
		|Support	    		|

  Scenario Outline:
     When  I click "<MENU ITEM>" button
     Then  I should land on "<PAGENAME>" Page
    Examples: 
      | MENU ITEM        | PAGENAME          | 
      | Homepage         | Homepage          | 
      | Accounts         | Accounts          | 
      | Transactions     | Transactions      | 
      | Payments         | Payments          | 
      | Beneficiaries    | Beneficiaries     | 
      | Profile Settings | Profile Settings  | 
      | Alerts           | Alerts            | 
      | Support          | Support           | 
