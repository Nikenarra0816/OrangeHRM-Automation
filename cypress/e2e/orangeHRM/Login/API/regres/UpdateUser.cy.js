/// <reference types="cypress" />

describe('API PUT Update User', () => {
    it('Test API Update User', () => {
        const userId = 2; // ID pengguna yang akan diupdate
        const updatedUserData = {
            name: 'Morpheus',
            job: 'Software Engineer' // Mengubah pekerjaan pengguna
        };

        // URL endpoint untuk memperbarui data pengguna
        const url = `https://reqres.in/api/users/${userId}`;

        // Menyederhanakan cy.request
        cy.request('PUT', url, updatedUserData).then((response) => {
          
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            expect(response.body.name).to.equal(updatedUserData.name);
            expect(response.body.job).to.equal(updatedUserData.job);
        });
    });
});
