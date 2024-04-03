

describe('Register User Test', () => {
    it('should register a new user', () => {
           let random = Math.random()
           let email = "gvantsa"+random+"@gmail.com"  
           let username = "gvantsa"+random
        cy.visit('https://automationteststore.com');
        cy.get('#customer_menu_top > li > a').should('be.visible').click();
        cy.get('.newcustomer > .heading2').should('have.text', 'I am a new customer.');
        cy.get('#accountFrm > fieldset > .btn').should('be.visible').click();
        cy.get('.maintext').should('be.visible');
        cy.get('#AccountFrm > :nth-child(4)').should('be.visible');
        cy.get('input#AccountFrm_firstname.form-control').type('gvantsa');
        cy.get('input#AccountFrm_lastname.form-control').type('mamuchashvili');
        cy.get('input#AccountFrm_email.form-control').type(email);
        cy.get('input#AccountFrm_telephone.form-control').type('598636827');
        cy.get('input#AccountFrm_fax.form-control').type('123456789');
        cy.get('input#AccountFrm_company.form-control').type('coinmania');
        cy.get('input#AccountFrm_address_1.form-control').type('nutsubidze');
        cy.get('input#AccountFrm_address_2.form-control').type('nutsubidze 2');
        cy.get('input#AccountFrm_city.form-control').type('Tbilisi');        
        cy.get('#AccountFrm_newsletter1').check();
        cy.get('#AccountFrm_agree').check();
        cy.contains('button.btn.btn-orange', 'Continue').click();
        cy.get('.alert-danger').should('be.visible')
            .and('contain', 'Zip/postal code must be between 3 and 10 characters!');
        cy.get('input#AccountFrm_postcode.form-control').type('0160');
        cy.get('#AccountFrm_country_id.form-control').should('be.visible').select('Georgia');
        cy.get('#AccountFrm_zone_id').should('be.visible').select('Tbilisi');
        cy.get('input#AccountFrm_loginname.form-control').type(username).should('be.visible');
        cy.get('input#AccountFrm_password.form-control').type('password').should('be.visible');
        cy.get('input#AccountFrm_confirm.form-control').type('password').should('be.visible');
        
        
        cy.contains('button.btn.btn-orange', 'Continue').click();
        cy.get('.column_right .heading2 span').should('have.text', 'My Account');
        cy.contains('Welcome back').should('be.visible');
        cy.get('#topnav > select').select('https://automationteststore.com/index.php?rt=product/special');
        cy.url().should('include', 'product/special');
    });
});