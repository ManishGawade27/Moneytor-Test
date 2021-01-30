const prompt = require('prompt-sync')();

const UserBase = prompt('Enter the Base ');
const UserPower = prompt('Enter the Power ');

function powerVal(base, power) {
    if (power != 0) {
        const val = base * powerVal(base, power - 1);
        return val;
    }
    else {
        return 1;
    }
}

const result = powerVal(UserBase, UserPower);
console.log(result);


