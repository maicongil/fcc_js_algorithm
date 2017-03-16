'use strict';

var expect = require('chai').expect;

describe('BasicAlgorithmScripting', function(){
    it('should exist', function(){
        var BasicAlgorithmScripting = require('./basicAlgorithmScripting.js');
        expect(BasicAlgorithmScripting).to.not.be.undefined;
    });
});

var BasicAlgorithmScripting = require('./basicAlgorithmScripting.js');

describe('#reverseString', function(){
    it('should return a string', function(){
        var actual= BasicAlgorithmScripting.reverseString('hello');
        expect(actual).to.be.a('string');

    });

    it('"hello" should become "olleh"', function(){
        var expected = "olleh";
        var actual = BasicAlgorithmScripting.reverseString('hello');
        expect(expected).to.be.eql(actual);
    });

    it('"Howdy" should become "ydwoH"', function(){
        var expected = "ydwoH";
        var actual = BasicAlgorithmScripting.reverseString("Howdy");
        expect(expected).to.be.eql(actual);
    });

    it('"Greetings from Earth" should become "htraE morf sgniteerG"', function(){
        var expected="htraE morf sgniteerG";
        var actual=BasicAlgorithmScripting.reverseString("Greetings from Earth");
        expect(expected).to.be.eql(actual);
    });
});

