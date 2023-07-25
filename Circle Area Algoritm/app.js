(function getValues(){
    let r = prompt('Enter r Value of Circle Area?');
    console.log(circleArea(r));
})();

function circleArea(r) {
    return (alert(`Result is: ${Math.PI * (r * r)}`))
};
