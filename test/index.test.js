const request = require('supertest')
import { expect } from 'chai';


// const app = require('../index')
import app from '../index.js';
describe('La route de la racine',()=>{
    it('doit retourner "helo from CI/CD"',(done)=> {
        request(app).get('/')
        .end((err,res)=>{
            expect(res.status).to.equal(200)
            expect(res.body).to.equal('Helo from CI/CD')
            done()
        })
    })
})