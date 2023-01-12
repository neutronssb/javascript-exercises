const sumAll = function(start, end) {
    let invalidInput = start < 0 || end < 0 || typeof start != "number" || typeof end != "number";
    if(invalidInput){
        return "ERROR";
    }
    let total = 0;
    for(let i = Math.min(start, end); i <= Math.max(start, end); i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
