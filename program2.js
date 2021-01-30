const numbers = [1, 2, 3, 4, 4, 2, 1, 5, 1, 2, 3];
let result = [];
for (let i = 0; i < numbers.length; i++) {
    if (!result.includes(numbers[i])) {
        result.push(numbers[i]);
    }
}
console.log(result);
