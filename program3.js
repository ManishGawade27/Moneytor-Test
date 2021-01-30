const prompt = require('prompt-sync')();

var UserInput = prompt('Enter the number upto which you want to print fibonacci?');
UserInput = parseInt(UserInput);

var n1 = 0;
var n2 = 1;
var n3 = 0;
var n = 100;
var i = 2;

do {
    n3 = parseInt(n1) + parseInt(n2);
    n1 = n2;
    n2 = n3;
    if (n3 < n) {
        console.log("  ", n3);
    }
    i = n3;
} while (i < UserInput);  