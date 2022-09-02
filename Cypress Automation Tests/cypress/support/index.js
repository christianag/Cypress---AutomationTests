// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// ***********************************************************

import LoginActions from "../support/actions/LoginActions"

const login = new LoginActions()

beforeEach(() => {
    login.login()
})
