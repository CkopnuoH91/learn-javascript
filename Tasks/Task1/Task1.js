function Add(a, b) {
    return a + b;
}

function Sub(a, b) {
    return a - b;
}

function Mul(a, b) {
    return a * b;
}

function Div(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        document.write("Divide by zero!");
    }
}

function IntegerDivision(a, b) {
    if (b != 0) {
        return (a / b) >> 0;
    } else {
        document.write("Divide by zero!");
    }
}

function DivisionWithRemainder(a, b) {
    if (b != 0) {
        return a % b;
    } else {
        document.write("Divide by zero!");
    }
}

document.write("<hr/>Число_объект<hr/>");
document.write("Add(2, {}): " + Add(2, {}) + "<br/>");
document.write("Sub(2, {}): " + Sub(2, {}) + "<br/>");
document.write("Mul(2, {}): " + Mul(2, {}) + "<br/>");
document.write("Div(2, {}): " + Div(2, {}) + "<br/>");
document.write("IntegerDivision(2, {}): " + IntegerDivision(2, {}) + "<br/>");
document.write("DivisionWithRemainder(2, {}): " + DivisionWithRemainder(2, {}) + "<br/>");

document.write("<hr/>Число_строка<hr/>");
document.write("Add(2, 'dfdsf'): " + Add(2, "dfdsf") + "<br/>");
document.write("Sub(2, 'dfdsf'): " + Sub(2, "dfdsf") + "<br/>");
document.write("Mul(2, 'dfdsf'): " + Mul(2, "dfdsf") + "<br/>");
document.write("Div(2, 'dfdsf'): " + Div(2, "dfdsf") + "<br/>");
document.write("IntegerDivision(2, 'dfdsf'): " + IntegerDivision(2, "dfdsf") + "<br/>");
document.write("DivisionWithRemainder(2, 'dfdsf'): " + DivisionWithRemainder(2, "dfdsf") + "<br/>");

document.write("<hr/>Число_массив<hr/>");
document.write("Add(2, []): " + Add(2, []) + "<br/>");
document.write("Sub(2, []): " + Sub(2, []) + "<br/>");
document.write("Mul(2, []): " + Mul(2, []) + "<br/>");
document.write("Div(2, []): " + Div(2, []) + "<br/>");
document.write("IntegerDivision(2, []): " + IntegerDivision(2, []) + "<br/>");
document.write("DivisionWithRemainder(2, []): " + DivisionWithRemainder(2, []) + "<br/>");

document.write("<hr/>Число_boolean<hr/>");
document.write("Add(2, true): " + Add(2, true) + "<br/>");
document.write("Sub(2, true): " + Sub(2, true) + "<br/>");
document.write("Mul(2, true): " + Mul(2, true) + "<br/>");
document.write("Div(2, true): " + Div(2, true) + "<br/>");
document.write("IntegerDivision(2, true): " + IntegerDivision(2, true) + "<br/>");
document.write("DivisionWithRemainder(2, true): " + DivisionWithRemainder(2, true) + "<br/>");

document.write("<hr/>Число_boolean<hr/>");
document.write("Add(2, false): " + Add(2, false) + "<br/>");
document.write("Sub(2, false): " + Sub(2, false) + "<br/>");
document.write("Mul(2, false): " + Mul(2, false) + "<br/>");
document.write("Div(2, false): " + Div(2, false) + "<br/>");
document.write("IntegerDivision(2, false): " + IntegerDivision(2, false) + "<br/>");
document.write("DivisionWithRemainder(2, false): " + DivisionWithRemainder(2, false) + "<br/>");

document.write("<hr/>Число_число<hr/>");
document.write("Add(7, 2): " + Add(7, 2) + "<br/>");
document.write("Sub(7, 2): " + Sub(7, 2) + "<br/>");
document.write("Mul(7, 2): " + Mul(7, 2) + "<br/>");
document.write("Div(7, 2): " + Div(7, 2) + "<br/>");
document.write("IntegerDivision(7, 2): " + IntegerDivision(7, 2) + "<br/>");
document.write("DivisionWithRemainder(7, 2): " + DivisionWithRemainder(7, 2) + "<br/>");

document.write("<hr/>Массив_массив<hr/>");
document.write("Add([], []): " + Add([], []) + "<br/>");
document.write("Sub([], []): " + Sub([], []) + "<br/>");
document.write("Mul([], []): " + Mul([], []) + "<br/>");
document.write("Div([], []): " + Div([], []) + "<br/>");
document.write("IntegerDivision([], []): " + IntegerDivision([], []) + "<br/>");
document.write("DivisionWithRemainder([], []): " + DivisionWithRemainder([], []) + "<br/>");

document.write("<hr/>Массив_массив<hr/>");
document.write("Add([1,2,3], [4, 5, 6]): " + Add([1, 2, 3], [4, 5, 6]) + "<br/>");
document.write("Sub([1,2,3], [4, 5, 6]): " + Sub([1, 2, 3], [4, 5, 6]) + "<br/>");
document.write("Mul([1,2,3], [4, 5, 6]): " + Mul([1, 2, 3], [4, 5, 6]) + "<br/>");
document.write("Div([1,2,3], [4, 5, 6]): " + Div([1, 2, 3], [4, 5, 6]) + "<br/>");
document.write("IntegerDivision([1,2,3], [4, 5, 6]): " + IntegerDivision([1, 2, 3], [4, 5, 6]) + "<br/>");
document.write("DivisionWithRemainder([1,2,3], [4, 5, 6]): " + DivisionWithRemainder([1, 2, 3], [4, 5, 6]) + "<br/>");

document.write("<hr/>boolean_boolean<hr/>");
document.write("Add(false, false): " + Add(false, false) + "<br/>");
document.write("Sub(false, false): " + Sub(false, false) + "<br/>");
document.write("Mul(false, false): " + Mul(false, false) + "<br/>");
document.write("Div(false, false): " + Div(false, false) + "<br/>");
document.write("IntegerDivision(false, false): " + IntegerDivision(false, false) + "<br/>");
document.write("DivisionWithRemainder(false, false): " + DivisionWithRemainder(false, false) + "<br/>");

document.write("<hr/>Объект_Объект<hr/>");
document.write("Add({}, {}): " + Add({}, {}) + "<br/>");
document.write("Sub({}, {}): " + Sub({}, {}) + "<br/>");
document.write("Mul({}, {}): " + Mul({}, {}) + "<br/>");
document.write("Div({}, {}): " + Div({}, {}) + "<br/>");
document.write("IntegerDivision({}, {}): " + IntegerDivision({}, {}) + "<br/>");
document.write("DivisionWithRemainder({}, {}): " + DivisionWithRemainder({}, {}) + "<br/>");

document.write("<hr/>Объект_массив<hr/>");
document.write("Add({}, []): " + Add({}, []) + "<br/>");
document.write("Sub({}, []): " + Sub({}, []) + "<br/>");
document.write("Mul({}, []): " + Mul({}, []) + "<br/>");
document.write("Div({}, []): " + Div({}, []) + "<br/>");
document.write("IntegerDivision({}, []): " + IntegerDivision({}, []) + "<br/>");
document.write("DivisionWithRemainder({}, []): " + DivisionWithRemainder({}, []) + "<br/>");