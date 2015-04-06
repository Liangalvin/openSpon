var stringParser = require('./pureJS.js');
var assert = require('assert');
var string;

describe("stringParser", function(){
  beforeEach(function(){
    stringParse = new stringParser("Hello world hi lol");
  });

  describe("#stringParser", function(){
    it("should return the input(string)", function(){
      //stringParse = new stringParser("Hello world");
      assert.equal("Hello world hi lol", stringParse.string);
    });
  });

  describe("#countChar", function(){
    it("should return the amount of times a selected character occurs in a string", function(){
      assert.equal(5, stringParse.countChar("l"));
      assert.equal(3, stringParse.countChar("o"));
    });
    it("should return false if the selected character does not exist", function(){
      assert.equal(false, stringParse.countChar("z"));
    });
  });

  describe("#occurances", function(){
    it("should return character(s) that appears the most and least", function(){
      assert.equal('The most reoccuring characters are l shown 5 times,  and least occuring are e w r d i shown 1 times.', stringParse.occurances());
    });
    it("should not return the character(s)(letter 'o' in this instance) in between the most and least occurances", function(){
      assert.equal('The most reoccuring characters are l shown 5 times,  and least occuring are e w r d i shown 1 times.', stringParse.occurances());
    });
  });
});
