// import supertest from 'supertest';
const supertest = require('supertest');
const server = supertest.agent('http://localhost:3000');

const STATUS = {
    SUCCESS: 200,
    SERVER_ERROR: 500
}

describe('GET /tx', () => {
    it('/green', done => {
        server
            .get('/tx/green')
            .expect('Content-Type', /json/)
            .expect(STATUS.SUCCESS)
            .end((err, res) => {
                return done()
            });
    });

    it('/red', done => {
        server
            .get('/tx/red')
            .expect('Content-Type', /json/)
            .expect(STATUS.SERVER_ERROR)
            .end((err, res) => {
                //     if(res.body)
                return done()
            });
    });
});

describe('GET /', () => {
    it('/red', done => {
        // server
        //     .get('/red')
        //     .expect('Content-Type', /json/)
        //     .expect(STATUS.SERVER_ERROR)
        //     .end((err, res) => {
                return done()
            // });
    });
});