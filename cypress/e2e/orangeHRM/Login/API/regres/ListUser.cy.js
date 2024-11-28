/// <reference types="cypress" />

describe('API GET List Users', () => {
    it('Test API List Users On Page 1', () => {
        const url = 'https://reqres.in/api/users?page=1';

        cy.request('GET', url).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            expect(response.body).to.have.property('page');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('array');

            response.body.data.forEach(user => {
                expect(user).to.have.property('id');
                expect(user).to.have.property('email');
                expect(user).to.have.property('first_name');
                expect(user).to.have.property('last_name');
                expect(user).to.have.property('avatar');
            });
        });
    });
});
