const clientsController = require('./clients');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('clients controller', () => {
  it('retuns all clients', () => {
    let res = {
      send: function () {},
    };
    let mock = sinon.mock(res);
    mock.expects('send').once().withArgs('FullStack Master');
    clientsController.create({}, res);
  });
});
