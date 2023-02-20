/// <refrence type = "cypress" />

//const cypress = require("cypress")


it('login', function(){

cy.visit('https://demoqa.com/login')
cy.get('[class="btn btn-light active"]').click()
cy.get('[id="userName"]').type('testk')
cy.get('[id="password"]').type('T#st1234')
cy.get('[id="login"]').click();

})