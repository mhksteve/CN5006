/*
console.log("Example 1")
console.log("This is my first porgram")
console.log("Welcome Steve your monthly salary is £100000")

console.log("Example 2")
const num1 = 5;
const num2 = 10;
const sum = num1+num2;
console.log('The sum of ' + num1 + ' and ' +num2+ ' is: ' +sum);
*/

//Min Htut Kyaw u2591936
function calculator() {
    const num1 = parseFloat(prompt("Enter the first num: "))
    const num2 = parseFloat(prompt("Enter the second number: "))
    const operation = prompt("Enter the operation (add,subtract,multiplication,division)".toLowerCase())
    
    let result;

    switch(operation) {
        case 'add':
            result = num1+num2;
            break;
        
        case'subtract':
            result = num1-num2;
            break;
        
        case 'multiplication':
            result = num1*num2;
            break;
        
        case 'division':
            if(num2===0) {
                console.log("Number can't be divisble by 0");
                return;
            }
            result = num1/num2;
            break;
        
        default:
            console.log("Please type the above operations only");
            return;
    }
    console.log("Result: ", result);
}

calculator();