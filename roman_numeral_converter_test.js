'use strict';

var expect = require('chai').expect;
var IntermediateAlgorithmScripting = require('./intermediateAlgorithmScripting.js');

/*convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX" */

describe('convertToRoman()', function(){

    it('convertToRoman(1) should return "I"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(1);
        var expected="I";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(2) should return "II"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(2);
        var expected="II";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(3) should return "III"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(3);
        var expected="III";
        expect(actual).to.be.eql(expected);
    });

     it('convertToRoman(4) should return "IV"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(4);
        var expected="IV";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(5) should return "V"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(5);
        var expected="V";
        expect(actual).to.be.eql(expected);
    });

     it('convertToRoman(7) should return "VII"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(7);
        var expected="VII";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(9) should return "IX"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(9);
        var expected="IX";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(12) should return "XII"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(12);
        var expected="XII";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(16) should return "XVI"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(16);
        var expected="XVI";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(798) should return "DCCXCVIII"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(798);
        var expected="DCCXCVIII";
        expect(actual).to.be.eql(expected);
    });

    it('convertToRoman(3999) should return "MMMCMXCIX"', function(){
        var actual =IntermediateAlgorithmScripting.convertToRoman(3999);
        var expected="MMMCMXCIX";
        expect(actual).to.be.eql(expected);
    });
})