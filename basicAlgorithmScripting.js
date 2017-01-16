'use strict';

var BasicAlgorithmScripting;

BasicAlgorithmScripting = {
    reverseString : function(str){
        return str.split('').reverse().join('');
    },
    factorialize : function(num){
        var factorial =num;
        for(var i = (num -1); i<=1;i--){
            factorial*=  i;
        }
        return factorial;
    }
};

module.exports = BasicAlgorithmScripting;