var routes = require('../routes/routes.js');
var routing = require('../server.js');
var assert = require('assert');
//var express = require('express');
//var app = express();
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

describe('#Server Routes', function(){
  describe('get', function(){

    it("should get the login page", function(){
      var req, res, spy;

      req = res = {};

      // spy = res.send = sinon.spy();
      // console.log(req, res, spy);
      console.log(routing);
      console.log(routes);
      routes(req, res);

      expect(res).to.equal(200);

    });
  });
});
