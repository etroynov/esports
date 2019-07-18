import { getGreeting } from '../support/app.po';

describe('ds', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ds!');
  });
});
