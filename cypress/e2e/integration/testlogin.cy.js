describe('testing open website', () => {
  it('testing open website', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
  
  it('Click More information', () => {
    cy.visit('https://example.com')
    cy.get('a').click()
    cy.url().should('include', 'iana.org')
  })
})