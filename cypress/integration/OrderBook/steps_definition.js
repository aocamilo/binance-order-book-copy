import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';

//Could get all the tags, or make better selectors! just adding basic tests to make sure app works correct
When('I input the correct pair to form a symbol', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-testid="first-input"] > .MuiInputBase-input').clear().type('BTC');
  cy.get('[data-testid="second-input"] > .MuiInputBase-input').clear().type('USDT');
});

And('I click the go button', () => {
  cy.get('[data-testid="start-button"]').click();
});

Then('I should see the loading spinner', () => {
  cy.get('[data-testid="spinner"]').should('be.visible');
});

When('I should see the table with the orders', () => {
  cy.get('.MuiTableContainer-root').should('exist').should('be.visible');
});

Then('I change the decimal aggregator value', () => {
  cy.get('#decimal-place-aggregator-select').click();
  cy.get('[data-value="10"]').click();
});

And('I should see the right type of value according to the decimal', () => {
  cy.get('[aria-label="ask-table"] > .MuiTableBody-root > :nth-child(1) > :nth-child(1) > .MuiTypography-root').then(
    (element) => {
      expect(element.text() % 10).to.eq(0);
    }
  );
});

When('I input an incorrect pair to form a symbol', () => {
  cy.visit('http://localhost:3000/');
  cy.get('[data-testid="first-input"] > .MuiInputBase-input').clear().type('BTCS');
});

Then('I should see the error message', () => {
  cy.get('.MuiTypography-root')
    .should('exist')
    .should('be.visible')
    .contains('Error Stablishing a connection with the web socket. Check the symbol and try again');
});

When('I should not see the Order Book table', () => {
  cy.get('.MuiTableContainer-root').should('not.exist');
});
