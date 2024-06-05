(function getValues() {
    let n = Number(prompt('Enter Number of the List Items: '));
    correlationAlgorithm(n)
}());

function correlationAlgorithm(listLength) {
    const xList = [];
    const yList = [];
    let sumX = sumY = sumXwithY = numerator = denominator = sumXsquare = sumYsquare = 0;

    for (let i = 0; i < listLength; i++) {
        xList[i] = Number(prompt(`Enter Value of the Item (X) Number${i + 1}`));
        sumX += xList[i]
        sumXsquare += Math.pow(xList[i], 2)
    }

    for (let i = 0; i < listLength; i++) {
        yList[i] = Number(prompt(`Enter Value of the Item (Y) Number${i + 1}`));
        sumY += yList[i];
        sumYsquare += Math.pow(yList[i], 2)
        sumXwithY += xList[i] * yList[i];
    }

    numerator = (listLength * sumXwithY) - (sumX * sumY);
    denominator = (Math.sqrt(listLength * sumXsquare - (Math.pow(sumX, 2)))) * Math.sqrt(listLength * sumYsquare - (Math.pow(sumY, 2)));
    console.log(Math.round(numerator / denominator));
    return alert(`Correlation Result is: ${Math.round(numerator / denominator)}`);
}