describe('Register User Test', () => {
    it('should register a new user successfully', () => {
        // 1. Launch browser and navigate to the URL
        cy.visit('http://automationexercise.com');

        // 2. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        // 3. Click on 'Signup / Login' button
        cy.get('header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a').click();

        // 4. Verify 'New User Signup!' is visible
        cy.get('.signup-form > h2').should('have.text','New User Signup!')

        // 5. Enter name and email address
        cy.get('input[name="name"]').type('gvantsa9');

        cy.get('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)').should('be.visible').type('gmamuchashvili19@gmail.com');

        // 6. Click 'Signup' button
        cy.get('#form > div > div > div:nth-child(3) > div > form > button').should('be.visible').click();

        // 7. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.get('#form > div > div > div > div > h2 > b').should('be.visible');

        // 8. Fill details: Title, Name, Email, Password, Date of birt
        
        cy.get ('[type="radio"]').check("Mrs");
  
        cy.get('input[name="name"]').should('have.value', 'gvantsa9');
 
        cy.get('input[name="email"]').should('have.value', 'gmamuchashvili19@gmail.com');
 
         cy.get('input[name="password"]').type('123456');

         cy.get('select#days.form-control').should('be.visible').select('13');

         cy.get('select#months.form-control').should('be.visible').select('10');

        cy.get('select#years.form-control').should('be.visible').select('1993');

        // 9. Select checkbox 'Sign up for our newsletter!'
        cy.get('input#newsletter').check();

        // 10. Select checkbox 'Receive special offers from our partners!'
        cy.get('input#optin').check();

        // 11. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get("#first_name").should('be.visible').type('gvantsa');

        cy.get('input[name="last_name"]').should('be.visible').type('mamuchashvili');

        cy.get('input[name="company"]').should('be.visible').type('coinmania');

        cy.get('input[name="address1"]').type('nutsubidze 22');
      
        cy.get('input[name="address2"]').type('nutsubidze 22');
     
        cy.get('select[name="country"]').should('be.visible').select('Canada');
   
        cy.get('input[name="state"]').type('DE');
    
        cy.get('input[name="city"]').type('Tbilisi');
       
        cy.get('input[name="zipcode"]').type('0160');
        
        cy.get('input[name="mobile_number"]').type('598636827');

        // 13. Click 'Create Account' button
        cy.contains('Create Account').click();

        // 14. Verify that 'ACCOUNT CREATED!' is visible
        cy.get("#form > div > div > div > h2 >b").should('have.text', 'Account Created!');

        // 15. Click 'Continue' button
        cy.contains('Continue').click();

        // 16. Verify that 'Logged in as username' is visible
        cy.contains('Logged in as').should('be.visible');

        // 17. Click 'Delete Account' button
        cy.contains('Delete Account').click();

        // 18. Verify that 'ACCOUNT DELETED!' is visible
        cy.contains('Account Deleted!').should('be.visible');

        // Click 'Continue' button
        cy.contains('Continue').click();
    });
});











