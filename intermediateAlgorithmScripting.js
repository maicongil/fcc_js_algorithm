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
        var missingLetter;
        for(var i = 1; i< str.length; i++){
            if(str.charCodeAt(i)-previousChar===2){
                missingLetter = String.fromCharCode(previousChar+1);
                break;
            }
            previousChar = str.charCodeAt(i);
        }
        return missingLetter;
    },
    convertToRoman : function(num){

        var decomposedNumbers = num.toString().split('').map(
            function(val, idx, arr){
                switch(arr.length - (idx+1)){
                    case 3 : 
                    return {'digit' : val, 'position' : 'thousands'};
                    break;
                     case 2 : 
                    return {'digit' : val, 'position' : 'hundreds', nextPosition : 'thousands'};
                    break;
                     case 1 : 
                    return {'digit' : val, 'position' : 'tens', nextPosition : 'hundreds'};
                    break;
                     case 0 : 
                    return {'digit' : val, 'position' : 'ones', nextPosition : 'tens'};
                    break;
                }
            }
        );

        var symbols = {
            'ones' : ['I','V'],
            'tens' : ['X','L'],
            'hundreds' : ['C','D'],
            'thousands' : ['M']
        };


        var romans =[];
        decomposedNumbers.forEach(function(decomposedNumber){
            var roman='';

            for(var i =1; i<=decomposedNumber.digit; i++){
                if(i===4){
                    roman = symbols[decomposedNumber.position][0]+symbols[decomposedNumber.position][1];
                }else if(i===5){
                    roman = symbols[decomposedNumber.position][1];
                }
                else if(i===9){
                    roman = symbols[decomposedNumber.position][0]+symbols[decomposedNumber.nextPosition][0];
                }
                else{
                    roman+=symbols[decomposedNumber.position][0];
                }
            }

            romans.push(roman);
            
        });

        return romans.join('');
    }
};

module.exports = IntermediateAlgorithmScripting;