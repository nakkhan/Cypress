/// <refrence type = "cypress" />

it('google test', function(){

cy.visit('https://google.com')
cy.title().should('eq', 'Google')
cy.get('[class="gLFyf"]').type('Automation step by step{enter}')
cy.wait(4000)
cy.contains('Videos').click();
})
