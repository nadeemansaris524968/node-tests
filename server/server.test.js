const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {

        it('should return Hello World response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Node Tests v1.0'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {

        it('should return you', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Nadeem Ansari', age: 25
                    });
                })
                .end(done);
        });
    });
});