'use strict';

var expect = require('chai').expect;
var IntermediateAlgorithmScripting = require('./intermediateAlgorithmScripting.js');

describe('fearNotLetter()', function(){
    
    it('fearNotLetter("abce") should return "d"', function(){
        var actual = IntermediateAlgorithmScripting.fearNotLetter("abce");
        var expected = "d";
        expect(actual).to.be.eql(expected);
    });

    it('fearNotLetter("abcdefghjklmno") should return "i"', function(){
        var actual = IntermediateAlgorithmScripting.fearNotLetter("abcdefghjklmno");
        var expected = "i";
        expect(actual).to.be.eql(expected);
    });

    it('fearNotLetter("bcd") should return "undefined"', function(){
        var actual = IntermediateAlgorithmScripting.fearNotLetter("bcd");
        expect(actual).to.be.undefined;
    });

     it('fearNotLetter("yz") should return "undefined"', function(){
        var actual = IntermediateAlgorithmScripting.fearNotLetter("yz");
        expect(actual).to.be.undefined;
    });

});