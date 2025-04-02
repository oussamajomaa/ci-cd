const request = require('supertest');
const { expect } = require('chai');
const app = require('../index');

describe('La route de la racine', () => {
    it('doit retourner "Helo from CI/CD"', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.equal('Helo from CI/CD');
                done();
            });
    });
});
