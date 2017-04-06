Feature: Login page - Disable Auto-helpers
As an AIB security officer 
I want some tools to be disabled, 
So that I can ensure the provided data by the user is secure and personal  
 
  Scenario: Prerequisites
    Given User is on the Login page
    Given Login widget is displayed

  Scenario Outline: Login page - Disable User ID field Auto-helpers
     Given "<BROWSER TOOL>" should be set to "<VALUE>" in User-ID field
      Examples: 
      | BROWSER TOOL   | VALUE |
      | autocapitalize | none  |
      | autocomplete   | off   |
      | autocorrect    | off   |
      | spellcheck     | false |
 
  Scenario Outline: Login page - Disable password field Auto-helpers
     Given "<BROWSER TOOL>" should be set to "<VALUE>" in Password field
      Examples: 
      | BROWSER TOOL   | VALUE |
      | autocapitalize | none  |
      | autocomplete   | off   |
      | autocorrect    | off   |
      | spellcheck     | false |
  
    Scenario Outline: Login page - OTC password field Auto-helpers
     Given "<BROWSER TOOL>" should be set to "<VALUE>" in OTC field
      Examples: 
      | BROWSER TOOL   | VALUE |
      | autocapitalize | none  |
      | autocomplete   | off   |
      | autocorrect    | off   |
      | spellcheck     | false |
  
