import cy from 'cypress'


describe('Login functionality', () => {
    beforeEach(() => {
        // Navigate to login page
        cy.visit('http://uitestingplayground.com/sampleapp/login')
    })

    it('Logs in successfully with valid credentials', () => {
        // Enter valid username and password
        cy.get('#a3167f42-0779-7c92-4210-29b9d9cde593').type('validUsername')
        cy.get('#11080e42-dbea-70ec-4656-f3710d47c3f1').type('pwd')

        // Click the login button
        cy.get('#login').click()

        // Assert that user is logged in successfully
        cy.get('#loginstatus').should('contain', 'User logged in successfully')
    })

    it('Displays error message with invalid username', () => {
        // Enter invalid username and valid password
        cy.get('#a3167f42-0779-7c92-4210-29b9d9cde593').type('invalidUsername')
        cy.get('#11080e42-dbea-70ec-4656-f3710d47c3f1').type('pwd')

        // Click the login button
        cy.get('#login').click()

        // Assert that error message is displayed
        cy.get('#loginstatus').should('contain', 'Invalid username or password')
    })

    it('Displays error message with invalid password', () => {
        // Enter valid username and invalid password
        cy.get('#a3167f42-0779-7c92-4210-29b9d9cde593').type('validUsername')
        cy.get('#11080e42-dbea-70ec-4656-f3710d47c3f1').type('invalidPassword')

        // Click the login button
        cy.get('#login').click()

        // Assert that error message is displayed
        cy.get('#loginstatus').should('contain', 'Invalid username or password')
    })

    it('Displays error message with missing username', () => {
        // Enter valid password only
        cy.get('#11080e42-dbea-70ec-4656-f3710d47c3f1').type('pwd')

        // Click the login button
        cy.get('#login').click()

        // Assert that error message is displayed
        cy.get('#loginstatus').should('contain', 'Username is required')
    })

    it('Displays error message with missing password', () => {
        // Enter valid username only
        cy.get('#a3167f42-0779-7c92-4210-29b9d9cde593').type('validUsername')

        // Click the login button
        cy.get('#login').click()

        // Assert that error message is displayed
        cy.get('#loginstatus').should('contain', 'Password is required')
    })
})
