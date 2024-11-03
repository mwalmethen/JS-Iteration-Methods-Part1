/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
 numbers = [10, 13, 20, 25, 38, 35, 40];  
******************************************************************/ 

// Function that filters vlaues that are greater than or equal to 25
 function numberInArray1(numbers) { 
    const filtered = numbers.filter(number => number >= 25);
    return filtered; // return new filtered array 
}
console.log(numberInArray1([10, 13, 20, 25, 38, 35, 40])); // Calling function 


// Function that filters values that are divisible by 5 
function numberInArray2(numbers) {
    const filtered = numbers.filter(number => number % 5 === 0);
    return filtered; // return new filtered array
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
    const squared = numbers.map(number => number **2)
    return squared;

}
console.log(squaredInarray([10, 13, 20, 25, 38, 35, 40])); // Calling function

// Function that takes the values in the array and multiplied by 2
function multiplyArray(numbers) {
    const multiplied = numbers.map(number => number *2);
    return multiplied;
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
    let filtered = numbers.filter(number => number >= 20);
    const squared = filtered.map(number => number **2);
    return squared;
}
console.log(squareMultiplyArray([10, 13, 20, 25, 38, 35, 40]));  // Calling function



// Function that filters numbers that are divisible by 5 and then multiplies each by 3
function divideMultiplyArray(numbers) {
    let filtered = numbers.filter(number => number % 5 === 0);
    const multiplied = filtered.map(number => number *3);
    return multiplied;
}
console.log(divideMultiplyArray([10, 13, 20, 25, 38, 35, 40]));  // Calling function