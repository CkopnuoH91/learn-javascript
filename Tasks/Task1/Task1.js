function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function integerDivision(a, b) {
    return (a / b) >> 0;
}

function divisionWithRemainder(a, b) {
    return a % b;
}

console.log("Number_Object");
console.log("add(2, {}): " + add(2, {}));
console.log("sub(2, {}): " + sub(2, {}));
console.log("mul(2, {}): " + mul(2, {}));
console.log("div(2, {}): " + div(2, {}));
console.log("integerDivision(2, {}): " + integerDivision(2, {}));
console.log("divisionWithRemainder(2, {}): " + divisionWithRemainder(2, {}));
console.log("\n");

console.log("Number_String");
console.log("add(2, 'dfdsf'): " + add(2, "dfdsf"));
console.log("sub(2, 'dfdsf'): " + sub(2, "dfdsf"));
console.log("mul(2, 'dfdsf'): " + mul(2, "dfdsf"));
console.log("div(2, 'dfdsf'): " + div(2, "dfdsf"));
console.log("integerDivision(2, 'dfdsf'): " + integerDivision(2, "dfdsf"));
console.log("divisionWithRemainder(2, 'dfdsf'): " + divisionWithRemainder(2, "dfdsf"));
console.log("\n");

console.log("Number_Array");
console.log("add(2, []): " + add(2, []));
console.log("sub(2, []): " + sub(2, []));
console.log("mul(2, []): " + mul(2, []));
console.log("div(2, []): " + div(2, []));
console.log("integerDivision(2, []): " + integerDivision(2, []));
console.log("divisionWithRemainder(2, []): " + divisionWithRemainder(2, []));
console.log("\n");

console.log("Number_Boolean");
console.log("add(2, true): " + add(2, true));
console.log("sub(2, true): " + sub(2, true));
console.log("mul(2, true): " + mul(2, true));
console.log("div(2, true): " + div(2, true));
console.log("integerDivision(2, true): " + integerDivision(2, true));
console.log("divisionWithRemainder(2, true): " + divisionWithRemainder(2, true));
console.log("\n");

console.log("Number_Boolean");
console.log("add(2, false): " + add(2, false));
console.log("sub(2, false): " + sub(2, false));
console.log("mul(2, false): " + mul(2, false));
console.log("div(2, false): " + div(2, false));
console.log("integerDivision(2, false): " + integerDivision(2, false));
console.log("divisionWithRemainder(2, false): " + divisionWithRemainder(2, false));
console.log("\n");

console.log("Number_Number");
console.log("add(7, 2): " + add(7, 2));
console.log("sub(7, 2): " + sub(7, 2));
console.log("mul(7, 2): " + mul(7, 2));
console.log("div(7, 2): " + div(7, 2));
console.log("integerDivision(7, 2): " + integerDivision(7, 2));
console.log("divisionWithRemainder(7, 2): " + divisionWithRemainder(7, 2));
console.log("\n");

console.log("Array_Array");
console.log("add([], []): " + add([], []));
console.log("sub([], []): " + sub([], []));
console.log("mul([], []): " + mul([], []));
console.log("div([], []): " + div([], []));
console.log("integerDivision([], []): " + integerDivision([], []));
console.log("divisionWithRemainder([], []): " + divisionWithRemainder([], []));
console.log("\n");

console.log("Array_Array");
console.log("add([1,2,3], [4, 5, 6]): " + add([1, 2, 3], [4, 5, 6]));
console.log("sub([1,2,3], [4, 5, 6]): " + sub([1, 2, 3], [4, 5, 6]));
console.log("mul([1,2,3], [4, 5, 6]): " + mul([1, 2, 3], [4, 5, 6]));
console.log("div([1,2,3], [4, 5, 6]): " + div([1, 2, 3], [4, 5, 6]));
console.log("integerDivision([1,2,3], [4, 5, 6]): " + integerDivision([1, 2, 3], [4, 5, 6]));
console.log("divisionWithRemainder([1,2,3], [4, 5, 6]): " + divisionWithRemainder([1, 2, 3], [4, 5, 6]));
console.log("\n");

console.log("Boolean_Boolean");
console.log("add(false, false): " + add(false, false));
console.log("sub(false, false): " + sub(false, false));
console.log("mul(false, false): " + mul(false, false));
console.log("div(false, false): " + div(false, false));
console.log("integerDivision(false, false): " + integerDivision(false, false));
console.log("divisionWithRemainder(false, false): " + divisionWithRemainder(false, false));
console.log("\n");

console.log("Object_Object");
console.log("add({}, {}): " + add({}, {}));
console.log("sub({}, {}): " + sub({}, {}));
console.log("mul({}, {}): " + mul({}, {}));
console.log("div({}, {}): " + div({}, {}));
console.log("integerDivision({}, {}): " + integerDivision({}, {}));
console.log("divisionWithRemainder({}, {}): " + divisionWithRemainder({}, {}));
console.log("\n");

console.log("Object_Array");
console.log("add({}, []): " + add({}, []));
console.log("sub({}, []): " + sub({}, []));
console.log("mul({}, []): " + mul({}, []));
console.log("div({}, []): " + div({}, []));
console.log("integerDivision({}, []): " + integerDivision({}, []));
console.log("divisionWithRemainder({}, []): " + divisionWithRemainder({}, []));