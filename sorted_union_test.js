'use strict';

var expect = require('chai').expect;
var IntermediateAlgorithmScripting = require('./intermediateAlgorithmScripting.js');

describe('uniteUnique()', function(){
    it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]', function(){
        var actual = IntermediateAlgorithmScripting.uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
        var expected =[1, 3, 2, 5, 4];
        expect(actual).to.be.eql(expected);
    });

     it('uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]', function(){
        var actual = IntermediateAlgorithmScripting.uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
        var expected =[1, 3, 2, [5], [4]];
        expect(actual).to.be.eql(expected);
    });

     it('uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]', function(){
        var actual = IntermediateAlgorithmScripting.uniteUnique([1, 2, 3], [5, 2, 1]);
        var expected =[1, 2, 3, 5];
        expect(actual).to.be.eql(expected);
    });

    it('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]', function(){
        var actual = IntermediateAlgorithmScripting.uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
        var expected =[1, 2, 3, 5, 4, 6, 7, 8];
        expect(actual).to.be.eql(expected);
    });
});