(function getValues() {
    let a = prompt('Enter a Value of Trapezoid Area?');
    let b = prompt('Enter b Value of Trapezoid Area?');
    let h = prompt('Enter h Value of Trapezoid Area?');
    console.log(trapezoidArea(a, b, h));
})();

//Impelement Trapezoid Area Algorithm using Javascript
function trapezoidArea(a, b, h) {
    return (alert(`Result is: ${((a + b) / 2) * h}`))
};