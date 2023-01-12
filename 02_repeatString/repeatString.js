const repeatString = function(inputString, repeatTimes) {
    output = ''
    if(repeatTimes < 0){
        return 'ERROR'
    }
    for (let i = repeatTimes; i > 0; i--){
        output += inputString
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
