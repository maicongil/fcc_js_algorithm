'use strict';

var expect = require('chai').expect;
var IntermediateAlgorithmScripting = require('./intermediateAlgorithmScripting.js');

describe('#smallestCommons()',function(){
    
    it('smallestCommons([1, 5]) should return a number.', function(){
        var actual = IntermediateAlgorithmScripting.smallestCommons([1,5]);
        expect(actual).to.be.a('number');
    });

    it('smallestCommons([1, 5]) should return a 60.', function(){
        var actual = IntermediateAlgorithmScripting.smallestCommons([1,5]);
        expect(actual).to.be.eq(60);
    });

    it('smallestCommons([5, 1]) should return a 60.', function(){
        var actual = IntermediateAlgorithmScripting.smallestCommons([5,1]);
        expect(actual).to.be.eq(60);
    });

    it('smallestCommons([1, 13]) should return a 360360.', function(){
        var actual = IntermediateAlgorithmScripting.smallestCommons([1,13]);
        expect(actual).to.be.eq(360360);
    });

    it('smallestCommons([23, 18]) should return a 360360.', function(){
        var actual = IntermediateAlgorithmScripting.smallestCommons([1,13]);
        expect(actual).to.be.eq(360360);
    });
});
