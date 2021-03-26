/// <reference types="cypress" />

context('GitHub', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'en-GB' });
        Object.defineProperty(win.navigator, 'languages', ['en-GB']);
      }
    })
  })

  it ('tests GitHub repository link', () => {
    cy.get('a[aria-label="Preview code on GitHub"]').invoke('removeAttr', 'target').click();
    cy.url().should('eq', 'https://github.com/JB1905/map-comparificator');
    cy.get('h2').contains('README.md').should('exist');
  })
})
