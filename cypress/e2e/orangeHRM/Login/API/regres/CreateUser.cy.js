/// <reference types="cypress" />

describe('API POST Create User', () => {
    it('Test API Create User', () => {
        const requestBody = {
            name: 'Niken',
            job: 'Leader'
        };

        cy.request('POST', 'https://reqres.in/api/users', requestBody).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(201);
            expect(response.body).to.not.be.null;
            expect(response.body.name).to.equal(requestBody.name);
            expect(response.body.job).to.equal(requestBody.job);
        });
    });
});
