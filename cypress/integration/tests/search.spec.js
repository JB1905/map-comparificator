/// <reference types="cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(window) {
        Object.defineProperty(window.navigator, 'language', { value: 'en-GB' });
        Object.defineProperty(window.navigator, 'languages', ['en-GB']);
      }
    })
  })

  // existing
  it ('tests', () => {
    // cy.get('[type="search"]').type('paris');
    // cy.get(".bp3-menu .bp3-menu-item").contains('[icon="map-marker"]').first().click();
  })

  // not exitsting

  // network error

  // history
})
