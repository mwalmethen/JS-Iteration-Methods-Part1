/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
 numbers = [10, 13, 20, 25, 38, 35, 40];  
******************************************************************/ 

// Function that filters vlaues that are greater than or equal to 25
 function numberInArray1(numbers) { 
    const filter_number = numbers.filter(num => num >= 25); /* filtering the numbers that are >= to 25 I used the arrow method in this by 
    background knowoledge and research in the weekend */ 
    return filter_number; // return new filtered array 
}
console.log(numberInArray1([10, 13, 20, 25, 38, 35, 40])); // Calling function output should be [25, 38, 35, 40]


// Function that filters values that are divisible by 5 
function numberInArray2(numbers) {
    const filter_number = numbers.filter(num => num % 5 === 0); /* filtering the numbers that can be divided by 5 
    output shoud be [10, 20, 25, 35, 40] */ 
    return filter_number; // return new filtered array
}
console.log(numberInArray2([10, 13, 20, 25, 38, 35, 40]));  // Calling function 



/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

// Function that takes the values in the array and squars them 
 function squaredInarray(numbers) {
    const squared = numbers.map(num => num **2) /* Same as before but now with .map to find the squared of a number without 
    effecting the length of the array */
    return squared; // return new array output should be [100, 169, 400, 625, 1444, 1225, 1600]

}
console.log(squaredInarray([10, 13, 20, 25, 38, 35, 40])); // Calling function

// Function that takes the values in the array and multiplied by 2
function multiplyArray(numbers) {
    const multiplied = numbers.map(num => num*2); // Same as before but this time we * by 2 
    return multiplied; // return and output should be [20, 26, 40, 50, 76, 70, 80]
}
console.log(multiplyArray([10, 13, 20, 25, 38, 35, 40])); // Calling function



/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
// Function that filters numbers that are greater than or equal to 20 then squares them
 function squareMultiplyArray(numbers) {
    let filter_number = numbers.filter(num => num >= 20); // filtering the numbers that are >= 20
    const squared = filter_number.map(num => num **2); /* Then using the map method to find the square value of each number 
    in the filtered_number array */
    return squared; // return output should be [400, 625, 1444, 1225, 1600]
}
console.log(squareMultiplyArray([10, 13, 20, 25, 38, 35, 40]));  // Calling function



// Function that filters numbers that are divisible by 5 and then multiplies each by 3
function divideMultiplyArray(numbers) {
    let filter_number = numbers.filter(num => num % 5 === 0); // filtering the numbers that can be divided by 5
    const multiplied = filter_number.map(num => num *3); /* Then using map method to multiply the filter_number array that 
    we created by 3 */
    return multiplied; // return output shoud be [30, 60, 75, 105, 120]
}
console.log(divideMultiplyArray([10, 13, 20, 25, 38, 35, 40]));  // Calling function