// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('login', () => { 
//     cy.visit(Cypress.env('URL'))
//     cy.contains('Login Form').should('exist')
//     cy.get('[name="email"]').type(Cypress.env('EMAIL'))
//     cy.get('[name="password"]').type(Cypress.env('PASSWORD'))
//     cy.get('[type="submit"]').click()
//     cy.url().should('contain', 'admin/organization-list')
//     cy.get('h3').should('contain', 'Organization List')
//  })

import 'cypress-file-upload';
