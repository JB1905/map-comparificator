/// <reference types="cypress" />

context('Theme', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'en-GB' });
        Object.defineProperty(win.navigator, 'languages', ['en-GB']);
      }
    })
  })
  
  it ('tests default themes in theme switch', () => {
    cy.get('[name="theme-options"]').click();
    cy.get('.bp4-menu-item').contains('Dark').click();
    cy.get('body').should('have.class', 'bp4-dark');

    cy.get('[name="theme-options"]').click();
    cy.get('.bp4-menu-item').contains('Light').click();
    cy.get('body').should('not.have.class', 'bp4-dark');

    // cy.get('[name="theme-options"]').click();
    // cy.get('.bp4-menu-item').contains('System').click();
    // cy.get('body').should('not.have.class', 'bp4-dark');
  })

  // with prefers color disabled/not supported
  it ('tests', () => {})

  // keyboard shortcut
  it ('tests theme swtiching with keyboard shortcuts', () => {
    cy.get('body').type('t');
    cy.get('body').type('t');
    cy.get('body').type('t');
  })
})
