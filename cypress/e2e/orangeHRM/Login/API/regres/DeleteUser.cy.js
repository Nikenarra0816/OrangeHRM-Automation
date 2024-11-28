/// <reference types="cypress" />

describe('API DELETE User', () => {
    it('Test API Delete User', () => {
        const userId = 2;  

        const url = `https://reqres.in/api/users/${userId}`;

        cy.request('DELETE', url).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(204);
            expect(response.body).to.be.empty;
        });
    });
});
