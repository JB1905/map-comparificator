/// <reference types="cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'en-GB' });
        Object.defineProperty(win.navigator, 'languages', ['en-GB']);
      }
    })
  })

  // existing
  it ('tests', () => {
    // cy.get('[type="search"]').type('paris');
    // cy.get(".bp4-menu .bp4-menu-item").contains('[icon="map-marker"]').first().click();
  })

  // not exitsting

  // network error

  // history
})
