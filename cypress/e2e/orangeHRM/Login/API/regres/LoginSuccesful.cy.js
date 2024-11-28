/// <reference types="cypress" />

describe('API POST Login Successful', () => {
    it('Test API Login Successful', () => {
        const loginData = {
            email: 'eve.holt@reqres.in', 
            password: 'cityslicka',       
        };

        const url = 'https://reqres.in/api/login';

        cy.request('POST', url, loginData).then(({ status, body }) => {
            cy.log(JSON.stringify(body));
            expect(status).to.eq(200);
            expect(body).to.have.property('token');
            expect(body.token).to.be.a('string');
        });
    });
});
