//STEP 1
function halfNumber ( number ){
    "use strict";
    let result = number / 2;
    window.document.write("Half of "+number+" is "+result +" <br>");
}

halfNumber(100);

//STEP 2
function squareNumber ( number ){
    "use strict";
    let result = Math.pow(number, 2);
    window.document.write("The result of squaring the number "+number+" is "+result +" <br>");

}
squareNumber(3);

//STEP 3
function percentOf( number1, number2){
    "use strict";
    let result = (number1/number2)*100;
    window.document.write(number1+ " is "+ result + "% of "+number2+" <br>");

}

percentOf(2,4);

//STEP 4
function findModulus( number1, number2){
    "use strict";
    var result = Math.min(number1,number2);
    //let result = number1 % number2;
    while (result > 0) {
        if (number1 % result == 0 && number2 % result == 0) {
            break;
        }
        result--;
    }
    window.document.write(result+ " is the modulus of "+ number1 + " and "+number2+" <br>");
}

findModulus(4,10);


//STEP 5
function sumNumbers() {
    "use strict";
    var sum = 0;
    var inputNumbers = window.prompt("Enter numbers delimited by a comma:");
    inputNumbers = inputNumbers.split(",");
    for (var i=0; i < inputNumbers.length; i++) {
        sum += parseInt(inputNumbers[i]);
    }

    window.console.log("Sum of the numbers in "+inputNumbers+ " is: " +String(sum));

    return sum;
}

sumNumbers();