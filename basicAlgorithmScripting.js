'use strict';

var BasicAlgorithmScripting;

BasicAlgorithmScripting = {
    reverseString : function(str){
        return str.split('').reverse().join('');
    },
    factorialize : function(num){
        var factorial = 1;
        for(var i = num ; i>1; i--){
            factorial*= i;
        }
        return factorial;
    }
};

module.exports = BasicAlgorithmScripting;