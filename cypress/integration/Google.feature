Feature: Google Main Page

  I want to visit a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I visit Google page
    Then I see "Google" in the title