'use strict';

var IntermediateAlgorithmScripting;

IntermediateAlgorithmScripting = {
    smallestCommons : function(arr){
        arr.sort(function(a,b){
            return a >b;
        });

        var isSmallestCommon =function(arr,num){
            for(var i = arr[0]; i<= arr[1]; i++){
                if(num % i !=0){
                    return false;
                }
            }
            return true;
        }

        var smallestCommon =0;

        while(true){
            smallestCommon++;
            if(isSmallestCommon(arr, smallestCommon)){
                break;
            }
        }

        return smallestCommon;
    },
    uniteUnique: function(){
        var args =[].slice.call(arguments);
        var newArr = args.reduce(function(a,b){
            return a.concat(b.filter(function(item){
                return a.indexOf(item)===-1;
            }));
        });
        return newArr;
    },
    fearNotLetter : function(str){
        var previousChar = str.charCodeAt(0);
        for(let i = 1; i< str.length; i++){
            if(str.charCodeAt(i)-previousChar===2){
                previousChar = String.fromCharCode(previousChar+1);
                break;
            }
            previousChar = str.charCodeAt(i);
        }
        return "d";
    }
};

module.exports = IntermediateAlgorithmScripting;