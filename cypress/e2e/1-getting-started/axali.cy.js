//import testdata from '../../fixtures/example.json'

describe('Register User Test', () => {
    it('should register a new user', () => {
        cy.fixture('example.json').then((testdata) => {
            cy.login(testdata.email,testdata.password)
        })
       // cy.log(testdata.email)

    //cy.login()
    });
});