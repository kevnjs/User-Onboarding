
describe('Connect to Cypress', () => {
    it('Connects to URL', () => {
        cy.visit('http://localhost:3000/');
    })
})

const firstNameInput = () => cy.get('input[name=first_name]');
const lastNameInput = () => cy.get('input[name=last_name');
const emailInput = () => cy.get('input[name=email]');
const checkbox = () => cy.get('input[type="checkbox"]');
const submitBtn = () => cy.get('button[id="submitBtn');

describe('All form elements are shown', () => {
    it('Check if all form elements are shown', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        checkbox().should('exist');
        submitBtn().should('exist');
    })
}) 

describe('Submit button starts disabled, and enabled when all entries are filled', () => {
    it('Checks if submit button is disabled', () => {
        submitBtn().should('be.disabled');
    })

    it('Submit button enables when all inputs are filled out', () => {
        firstNameInput().type('First');
        lastNameInput().type('Last');
        emailInput().type('test@email.com');
        checkbox().check()
        submitBtn().should('not.be.disabled');
        submitBtn().click();
      })
})

describe('User is created when form is submitted', () => {
    it('New User appears after submit is pressed', () => {
        cy.contains('First Last').should('not.exist');
        cy.contains('test@email.com').should('not.exist');
        firstNameInput().type('First');
        lastNameInput().type('Last');
        emailInput().type('test@email.com');
        checkbox().check()
        submitBtn().click();
        cy.contains('First Last').should('exist');
        cy.contains('test@email.com').should('exist');
    })
})


