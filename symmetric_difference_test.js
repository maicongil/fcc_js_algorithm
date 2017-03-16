'use strict';

/*




sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements. 
*/

var expect = require('chai').expect;
var AdvancedAlgorithmScripting = require('./advancedAlgorithmScripting');

describe('sym', function(){
    
    var actual = null;
    var expected = null;

    it('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].', function(){
        actual = AdvancedAlgorithmScripting.sym([1, 2, 3], [5, 2, 1, 4]);
        expected = [3, 4, 5];
        expect(actual).to.be.eql(expected);
    });

    it('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.', function(){
        actual = AdvancedAlgorithmScripting.sym([1, 2, 3], [5, 2, 1, 4]).length;
        expected = 3;
        expect(actual).to.be.equal(expected);
    });

    it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', function(){
        actual = AdvancedAlgorithmScripting.sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
        expected = [1, 4, 5];
        expect(actual).to.be.eql(expected);
    });

    it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.', function(){
        actual = AdvancedAlgorithmScripting.sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length;
        expected = 3;
        expect(actual).to.be.equal(expected);
    });

    it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].', function(){
        actual = AdvancedAlgorithmScripting.sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
        expected = [1, 4, 5];
        expect(actual).to.be.eql(expected);
    });

});