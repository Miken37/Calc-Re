function log(text) {
    console.log(text);
}
log('Connected');

let calc = {
    add: function (n1, n2) {
        return n1 + n2;
    },
    subtract: function (n1, n2) {
        return n1 - n2;
    },
    multiply: function (n1, n2) {
        return n1 * n2;
    },
    divide: function (n1, n2) {
        return n1 / n2;
    }
}

function operate(n1, n2, operator) {        //0=+ 1=* 2=- 3=/
    switch (operator) {
        case 0:
            return calc.add(n1, n2);
        case 1:
            return calc.multiply(n1, n2);
        case 2:
            return calc.subtract(n1, n2);
        case 3:
            return calc.divide(n1, n2);
    }
}

function toDisplay(symbol) {
    display.textContent = parseInt(symbol);
}

let display = document.querySelector('.numberDisplay');
let num0 = document.querySelector('#zero');
num0.addEventListener('click', () => {
    toDisplay(num0.textContent);
});










