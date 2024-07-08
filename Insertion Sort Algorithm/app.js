(function getValues() {
    insertionSortAlgorithm([9, 1, 4, 5])
})();


function insertionSortAlgorithm(x) {
    for (let i = 1; i < x.length; i++) {
        let key = x[i];
        for (var j = i - 1; j >= 0; j--) {
            if (x[j] > key) x[j + 1] = x[j]
            else break;
        };
        x[j + 1] = key;
    }
    console.log(x);
};

