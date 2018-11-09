name = 'Nellie';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);

}

console.log('initial');
let avg = getAverage(1,2);
console.log('average is:', avg);
function getAverage(a, b) {
    console.log('test inside avg function');
    let average = (a + b) / 2;
    return average;

}


/////////////////////////////////

let fruits = ['mango', 'banana', 'blueberry'];


function firstFruit() {
    console.log(fruits[0]);
    let favFruit = fruits[1];
    
    function printFavFruit() {
    console.log(favFruit);
    }
    printFavFruit();

    let leastFruit = fruits[2];
    console.log(leastFruit);
}

myFunction();
function myFunction() {
    console.log('Hello', name);
}


let alertFunction = function() {
    alert('alert test');
}
alertFunction();

firstFruit();