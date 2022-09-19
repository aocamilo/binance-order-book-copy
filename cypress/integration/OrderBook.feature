#Basic test to assert cypress is working fine
Feature: Binance Order Book Clone

  I want to see the order book of the input pair
  
  Scenario: User inputs a correct pair to form a symbol
    When I input the correct pair to form a symbol
    And I click the go button
    Then I should see the loading spinner
    And I should see the table with the orders
    Then I change the decimal aggregator value
    And I should see the right type of value according to the decimal

  Scenario: User inputs an incorrect pair to form a symbol
    When I input an incorrect pair to form a symbol
    And I click the go button
    Then I should see the error message
    And I should not see the Order Book table