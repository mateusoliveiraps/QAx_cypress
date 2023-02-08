/// <reference types="cypress" />

describe('home', () => {    
    it('webapp deve estar online', () => {
        // / Rota principal da urlBase
        cy.visit('/')

        cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
    })
})