Feature: Login page - Fraud Warning Message
As a User,
I want to be notified about the latest fraud messages before I login
So that I can ensure my login journey is secure

  Scenario: User can see Fraud Warning Message on the login page in the Scam email message container
    Given User is on login page
     Then User can see Fraud Warning Message Header text in the Scam email message container:

  """
  Protect your business from email scams
  """

      And User can see Warning Message Subheader text in the Scam email message container:

"""
Don’t be a victim of email fraud, businesses throughout the world, including Ireland, are being targeted by scammers. These scams generally work in 2 ways, either Scammers pretend to be legitimate suppliers or pretend to be someone within your own company.
In both cases the emails may look genuine, learn how to 
identify and handle these cases here.
"""
