/// <reference types="cypress" />

context('Theme', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  // manual
  it ('tests', () => {})

  // with prefers color disabled/not supported
  it ('tests', () => {})

  // keyboard shortcut
  it ('tests', () => {
    cy.get('body').type('t')
    cy.get('body').type('t')
    cy.get('body').type('t')
  })
})
