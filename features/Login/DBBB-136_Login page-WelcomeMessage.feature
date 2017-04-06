Feature: Login page - Welcome Message
As a User
I want to be welcomed to the login page
So that I know what I can expect from this page

  Scenario: User can see the Welcome message on the login page
    Given User is on login page
     Then User can see Header text:
    """
    Welcome Message
    """
    And User can see Subheader text:
    """
    Cupcake ipsum dolor. Sit amet dessert fruitcake cotton candy tootsie roll cake biscuit biscuit. Oat cake pudding caramels apple pie carrot cake powder sesame snaps pie. Chocolate cake gummies chocolate croissant chocolate cake.
    """






