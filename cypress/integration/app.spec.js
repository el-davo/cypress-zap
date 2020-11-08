import {app} from '../support';

describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Should have a header', () => {
        app.header().should('be.visible');
    });
});
