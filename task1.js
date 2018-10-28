function sumOfOther(incomingArray) { 
    let sum = 0;

    for (let i = 0; i < incomingArray.length; i++) { 
        sum += incomingArray[i]; 
    } 

    const resultArray = [];

    for (let i = 0; i < incomingArray.length; i++) { 
        resultArray[i] = sum - incomingArray[i]; 
    } 

    return resultArray; 
}