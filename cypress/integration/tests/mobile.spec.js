/// <reference types="cypress" />

context('Mobile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'en-GB' });
        Object.defineProperty(win.navigator, 'languages', ['en-GB']);
      }
    })
  })

  it ('tests fallback screen for smaller devices', () => {
    cy.viewport(960, 680);
    cy.get('h4').contains('Your screen is too small').should('exist');
    
    cy.viewport(1024, 680);
    cy.get('h4').contains('Your screen is too small').should('not.exist');
  })
})
