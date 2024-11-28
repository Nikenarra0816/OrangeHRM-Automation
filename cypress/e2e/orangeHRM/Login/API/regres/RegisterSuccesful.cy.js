/// <reference types="cypress" />

describe('API POST Register Successful', () => {
    it('Test API Register Successful', () => {
        const registerData = {
            email: 'eve.holt@reqres.in', 
            password: 'pistol'           
        };
        const url = 'https://reqres.in/api/register';

        cy.request('POST', url, registerData).then(({ status, body }) => {
            cy.log(JSON.stringify(body));
            expect(status).to.eq(200);
            expect(body).to.have.property('id');
            expect(body).to.have.property('token');
            expect(body.token).to.be.a('string');
        });
    });
});
