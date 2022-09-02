/// <reference types="cypress" />

import LoginActions from "../support/actions/LoginActions"

const login = new LoginActions()

describe('Login Page Tests', () => {

    it('Logout', () => {
      login.logout()
    })

})