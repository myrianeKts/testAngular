function largestNumber (intArray) {
    const theLargestNum = intArray.map( num => num.toString()) // turn to numeric string array
    .sort((a,b) => {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    })
    .join('');
    console.log(`theLargestNum ${theLargestNum}`);
    return theLargestNum;
}

exports.largestNumber = largestNumber;
