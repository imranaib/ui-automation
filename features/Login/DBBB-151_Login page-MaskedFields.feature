Feature: Login page - Masked fields
As a User, 
I want certain fields to be masked
So that I know that my information isn't visible to others in the room

  Scenario: Precondition
    Given User is on the Login page

  Scenario: Mask sensitive data Login input fields  
    Given Password is a secure field
    Given OTC is a secure field
    
