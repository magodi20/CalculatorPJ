
let displayScreen = document.getElementById('input-text');
let buttonC = document.getElementById('button-c');
let buttonArrow = document.getElementById('operator-arrow');
let buttonOperator = document.getElementById('operator-div');
let buttonSeven = document.getElementById('button-seven');
let buttonEigth = document.getElementById('button-eigth');
let buttonNine = document.getElementById('button-nine');
let buttonMult = document.getElementById('button-*');
let buttonFour = document.getElementById('button-four');
let buttonFive = document.getElementById('button-five');
let buttonSix = document.getElementById('button-six');
let buttonMinus = document.getElementById('button-minus');
let buttonOne = document.getElementById('button-one');
let buttonTwo = document.getElementById('button-two');
let buttonThree = document.getElementById('button-three');
let buttonPlus = document.getElementById('button-plus');
let buttonZero = document.getElementById('button-zero');
let buttonEqual = document.getElementById('button-equal');

fullOp = 0;

let currentOp = "";



function operate(op) {
    console.log("DISPLAY BEFORE OP =======>", displayScreen.innerHTML);
    console.log({ currentOp });

    if (op === "add") {
        fullOp += parseInt(displayScreen.innerHTML);
    }
    if (op === "sub") {
        fullOp -= parseInt(displayScreen.innerHTML)

    }
    if (op === "mult") {
        fullOp *= parseInt(displayScreen.innerHTML)

    }
    if (op === "div") {
        fullOp /= parseInt(displayScreen.innerHTML)
    }
    console.log("DISPLAY AFTER OP =======>", displayScreen.innerHTML);

    console.log({ currentOp });

    displayScreen.innerHTML = '';
}

const equal = () => {

    let finalResult = eval(currentOp);
    displayScreen.innerHTML = finalResult;
    console.log({ currentOp });




}


function inputFunction(arg) {
    displayScreen.innerHTML = displayScreen.innerHTML + arg.innerHTML;


}



buttonC.addEventListener("click", function () {
    currentOp = '';
    displayScreen.innerHTML = '';
    fullOp = 0;
    prevOperator = 0;
});

buttonArrow.addEventListener("click", function () {
    // inputFunction(buttonArrow);
});
buttonOperator.addEventListener("click", function () {
    // inputFunction(buttonOperator);
    operate('div')
    currentOp += "/";

});
buttonSeven.addEventListener("click", function () {
    inputFunction(buttonSeven);
    currentOp += displayScreen.innerHTML;


});

buttonEigth.addEventListener("click", function () {
    inputFunction(buttonEigth);
    currentOp += displayScreen.innerHTML;
});

buttonNine.addEventListener("click", function () {
    inputFunction(buttonNine);
    currentOp += displayScreen.innerHTML;

});



buttonFour.addEventListener("click", function () {
    inputFunction(buttonFour);
    currentOp += displayScreen.innerHTML;
});

buttonFive.addEventListener("click", function () {
    inputFunction(buttonFive);
    currentOp += displayScreen.innerHTML;


});

buttonSix.addEventListener("click", function () {
    inputFunction(buttonSix);
    currentOp += displayScreen.innerHTML;

});

buttonMinus.addEventListener("click", function () {
    // inputFunction(buttonMinus);
    operate('sub')
    currentOp += displayScreen.innerHTML;
    currentOp += "-";



});

buttonOne.addEventListener("click", function () {
    inputFunction(buttonOne);
    currentOp += displayScreen.innerHTML;
});

buttonTwo.addEventListener("click", function () {
    inputFunction(buttonTwo);
    currentOp += displayScreen.innerHTML;
});

buttonThree.addEventListener("click", function () {
    inputFunction(buttonThree);
    currentOp += displayScreen.innerHTML;

});

buttonPlus.addEventListener("click", function () {
    operate('add')
    currentOp = currentOp + '\u002B';


});

buttonZero.addEventListener("click", function () {
    inputFunction(buttonZero);


});

buttonEqual.addEventListener("click", function () {
    // inputFunction(buttonEqual);
    equal()
});


buttonMult.addEventListener("click", function () {
    // inputFunction(buttonMult);
    operate('mult')
    currentOp += "*";

});
