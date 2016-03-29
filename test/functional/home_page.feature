Feature: Customers should be able to see the content on the home page 

  Scenario: Viewing the summary
    Given I go to the home page
    Then I should see 'Hello world!'


  Scenario: Customer wants to move to another page
    Given I go to the home page
    When I click 'Another page'
    Then I should see 'Welcome to the other page'
