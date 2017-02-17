'use strict';

var AdvancedAlgorithmScripting;

AdvancedAlgorithmScripting = {
    checkCashRegister : function(price, cash, cid){
        
        var money = {
                penny : 0.01,
                nickel : 0.05,
                dime : 0.10,
                quarter : 0.25,
                one : 1.00,
                five : 5.00,
                ten : 10.00,
                twenty : 20.00,
                onehundred : 100.00
        };
        
        var changeDue = cash - price;
        var change =[];

        cid.reverse().forEach(function(item){
            var currentCoinValue = money[item[0].trim().toLowerCase()];
            if(changeDue >= currentCoinValue){
                var coinAcc = 0.00;
                while(((changeDue - currentCoinValue )>=0.00) && ((item[1] - currentCoinValue )>=0.00)){
                    changeDue = (changeDue - currentCoinValue).toFixed(2);
                    item[1] = (item[1] - currentCoinValue).toFixed(2);
                    coinAcc += currentCoinValue;
                }
                change.push([item[0], coinAcc]);
            }
        });

        var cashInDrawer = cid.reduce(function(a, b){
            return a + b[1];
        }, 0.00);


        if(changeDue > 0.00){
            return "Insufficient Funds";
        }

        if(cashInDrawer == 0.00){
            return 'Closed';
        }

        return change;
    }
};

module.exports = AdvancedAlgorithmScripting;