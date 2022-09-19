import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://google.com';
Given('I visit Google page', () => {
  cy.visit(url);
});

Then('I see {string} in the title', (title) => {
  cy.findByText(title).should('exist');
});
