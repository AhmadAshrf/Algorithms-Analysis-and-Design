(function getValues(){
    let n = Number(prompt('Enter Number of the List Items: '));
    return standardDivisionAlgorithm(n);
}());

// Impelement Standard Division Algorithm
function standardDivisionAlgorithm(listLength){
    // console.log(listLength);
    let sd = avg = a = b = 0;
    let list = [];

    for(let i = 0; i < listLength; i++){
        list[i] = Number(prompt(`Enter Value of the Item Number${i+1}`));
        avg += list[i]
    };

    avg /= listLength; // (avg = avg / listLength)

    for(let i = 0; i < listLength; i++){
        a += Math.pow(list[i] - avg, 2)
    };

    b = a / listLength;

    sd = Math.sqrt(b);

    console.log(sd);
    return sd;
};