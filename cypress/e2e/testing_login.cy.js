describe('testing open website', () => {
  it('testing open website', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
})