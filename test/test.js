// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const should = require('should');
const chaiHttp = require('chai-http');
const server = require('../app/index');

chai.use(chaiHttp);
// chai.use(should);
// Our parent block
describe('Endpoint Tests', () => {
  /*
  * Test the /GET route
  */
  describe('/GET homepage', () => {
    it('it should GET the default endpoint', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.status.should.be.equal(200);
          done();
        });
    });
  });

  describe('/POST Authentication', () => {
    it('it should not authenticate user without cardDetais and pin', (done) => {
      chai.request(server)
        .post('/login')
        .send('')
        .end((err, res) => {
          res.status.should.be.equal(401);
          done();
        });
    });

    it('it should not accept invalid parameters', (done) => {
      const credentials = {
        name: 'jebzmos4',
        key: '123456'
      };
      chai.request(server)
        .post('/login')
        .send(credentials)
        .end((err, res) => {
          res.status.should.be.equal(400);
          done();
        });
    });

    it('it should successfully log user in successfully', (done) => {
      const credentials = {
        cardDetails: 'jebzmos4',
        pin: '123456'
      };
      chai.request(server)
        .post('/login')
        .send(credentials)
        .end((err, res) => {
          res.status.should.be.equal(200);
          should(res.body).have.property('message', 'User successfully authenticated');
          done();
        });
    });
  });
});
