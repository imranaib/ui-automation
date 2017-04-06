Feature: Login page - Unsuccessful Login Attempt 
As a user
I want to be notified whenever I have provide incorrect login credentials, 
So I can amend them and login successfully	


  Scenario Outline: Unsuccessful Login Attempts
    Given User is on the Login page
     When User enters "<USERID>" into the User ID field
      And User enters "<PASSWORD>" into the Password field
      And User enters "<OTC>" into the One-Time Code field
      And Login button is clickable
     When User clicks on the Log-in button
     Then Unsuccessful login message is displayed as "User <USERID> is not authorized!" 
  
    Examples: 
      | USERID      | PASSWORD     | OTC               | 
      | 42560058256 | qwerty12345  | firstFactorToken  | 
      | LucaUser019 | qwerty12345  | secondFactorToken | 
      | Rogier      | 1234         | firstFactorToken  | 
      | HeLeN825    | abcd12345678 | secondFactorToken | 
      | HELEN025    | 1234         | BadOneTimeCode    | 
      | HELEN025    | abcd1234     | secondFactorToken | 
      | HELEN025    | abcd12345678 | BadOneTimeCode    | 
    # | HELEN025    | abcd12345678 | secondFactorToken |
    
      
