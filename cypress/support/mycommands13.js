Cypress.Commands.add('login', (email, password) =>{

        cy.visit('https://www.cavea.ge/')
        cy.get('.col-xs-8 > .form-group > .btn-white').click()
        cy.get('input#username.form-control').click();
        cy.wait(400); 
        cy.get('input#username.form-control').type(email)
        cy.get('.bs-login-form > .modal-dialog > .modal-content > .modal-body > form > :nth-child(5) > .form-control').type(password)
        cy.get(':nth-child(6) > .btn').click()
        cy.get('#eng > a').click();
        cy.contains('მთავარი').should('not.exist')
        cy.contains('Main Page').should('exist')
        cy.get("#geo > a").click();
        cy.get('div.row ul li a label').click();
        cy.contains('პროფილი').click();
        cy.contains('მიმდინარე ჯავშნები')
        cy.get('div.row ul li a label').click();
        cy.contains('გამოსვლა').click();

});
