
function isArray(arr) {
    console.log("Is parameter a number?:\n");
    console.log("Method 1:", Array.isArray(arr));   
    console.log("Method 2:", arr.constructor == Array);
    console.log("Method 3:", toString.call(arr) === "[object Array]");
}


function range() {
    var arr = [];
    switch (arguments.length) {
        case 1:
            return [...Array(arguments[0]).keys()]
            break;
        case 2: {
            arr = [...Array(arguments[1]).keys()];
            arr.splice(0, arguments[0]);
            return arr;
            break;
        }
        case 3: {
            arr = [...Array(arguments[1]).keys()];
            arr.splice(0, arguments[0]);
            return arr.filter(i => i % arguments[2] != 0);
            break;
        }           
    }
}

function compactWithLoop(arr) {
    var ar = Array(arr.length);
    for (var i = 0; i < ar.length; i++) {
        ar[i] = true;
    }
    return ar;
}

function compactWithFill(arr) {
    var ar = arr.slice();
    return ar.fill(true);
}

function sumWithLoop(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

function sumWithReduce(arr) {
    return arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
}

function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        obj[key] = true; 
    }
    return Object.keys(obj); 
}

function last(arr) {
    return arr[arr.length - 1];
}

function excludeLast(arr, exclude) {
    if (Number.isInteger(exclude) && exclude >= 0) {
        return arr.filter(function (item, i) {
            return i < arr.length - exclude;
        })
    } else {
        return arr.filter(function (item, i) {
            return i < arr.length - 1;
        })
    }
}

var a = [0, 1, 2, 3, 4];
console.log("Array:\n");
console.log(a);
isArray(a);

console.log("Range:\n");
console.log(range(5));
console.log(range(1, 5));
console.log(range(1, 10, 2));

console.log("Compact:\n");
console.log(compactWithLoop(a));
console.log(compactWithFill(a));

console.log("New array:\n");
var array = [-1, 2, 3, 4, 4, 2, 5, 6, 7];
console.log(array);
console.log("Unique:\n");
console.log(unique(array));

console.log("Sum:\n");
sumWithLoop(a);
console.log(sumWithReduce(a));

console.log("Last:\n");
console.log(last(a));

console.log("ExcludeLast:\n");
console.log(excludeLast(a, 2));