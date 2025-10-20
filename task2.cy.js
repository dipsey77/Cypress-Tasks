describe('Sauce Demo', () => {
  it('Login', () => {
    cy.visit('https://saucedemo.com/')
    cy.get('[id="user-name"]').should('be.visible').and('be.empty').type('standard_user')
    cy.get('[id="password"]').should('be.visible').and('be.empty').type('secret_sauce')
    cy.get('[id="login-button"]').should('be.visible').should('exist').click()
    cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
  })
})