// <!--------------------------------------------------------------------------------------------------------------->

// 1. Write a js program to read and print elements of array.

// var car = [2, 3, 4, "hello", true];

// for (let i = 0; i <= car.length; i++) {
//   console.log(car[i]);
// }

// <!--------------------------------------------------------------------------------------------------------------->

// 2. Write a js program to print all negative elements in an array.

// var number = [12, 54, 32, -43, -32, 12, -23];
// var negativeNumber = number.filter(function (number) {
//   return number < 0;
// });
// console.log(negativeNumber);

// <!--------------------------------------------------------------------------------------------------------------->

// 3. Write a js program to find sum of all array elements.

// var numberss = [10, 20, 20, 50];
// let sum = 0;
// for (let i = 0; i < numberss.length; i++) {
//   sum = sum + numberss[i];
// }
// console.log(sum);

// <!--------------------------------------------------------------------------------------------------------------->

// 4. Write a js program to find maximum and minimum element in an array.

// var myArray = [1, 5, 6, 2, 3];
// var m = Math.min(...myArray);
// console.log(m);
// var n = Math.max(...myArray);
// console.log(n);

// <!--------------------------------------------------------------------------------------------------------------->

// 5. Write a js program to find second largest element in an array.

// <!--------------------------------------------------------------------------------------------------------------->

// 6. Write a js program to count total number of even and odd elements in an array.

// function countEvenOdd(arr, arr_size) {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i < arr_size; i++) {
//     if (arr[i] & (1 == 1)) odd++;
//     else even++;
//   }
//   console.log("odd:", odd);
//   console.log("even:", even);
// }
// var arr = [4, 5, 6, 7, 8, 34, 65, 78, 23];
// let n = arr.length;
// countEvenOdd(arr, n);

// <!--------------------------------------------------------------------------------------------------------------->

// 7. Write a js program to count total number of negative elements in an array.

// function countNegative(arr, arr_size) {
//   let negative = 0;
//   for (let i = 0; i < arr_size; i++) {
//     if (arr[i] <= 0) negative++;
//   }
//   console.log(negative);
// }
// var arr = [4, 5, 6, 7, 8, 34, 65, 78, 23, -34, -56];
// let n = arr.length;
// countNegative(arr, n);

// <!--------------------------------------------------------------------------------------------------------------->

// 8. Write a js program to copy all elements from an array to another array.

// var array1 = [23, 43, 54, 23, 43, 4];
// for (let i = 0; i < array1.length; i++) {}
// console.log(array1);
// var arrays2 = array1;
// console.log(arrays2);

// <!--------------------------------------------------------------------------------------------------------------->

// 9. Write a js program to insert an element in an array.
// var ary = new Array();
// for (let g = 0; g < 5; g++) {
//   ary[g] = prompt("Enter value for array");
// }
// for (let i = 0; i < 5; i++) {}
// console.log(ary);

// <!--------------------------------------------------------------------------------------------------------------->

// 10. Write a js program to delete an element from an array at specified position.

// var myArray = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(myArray);
// myArray.splice(0, 2);
// console.log("after removing elements", myArray);

// <!--------------------------------------------------------------------------------------------------------------->

// 11. Write a js program to count frequency of each element in an array.

// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// for (const num of arr) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(counts[5], counts[2], counts[9], counts[4]);

// <!--------------------------------------------------------------------------------------------------------------->

// 12. Write a js program to print all unique elements in the array.

// function toUniqueArray(a) {
//   var newArr = [];
//   for (var i = 0; i < a.length; i++) {
//     if (newArr.indexOf(a[i]) === -1) {
//       newArr.push(a[i]);
//     }
//   }
//   return newArr;
// }
// var colors = [2, "yellow", "yellow", "green", "green", 2, 4, 4, 5];
// var colorsUnique = toUniqueArray(colors);
// console.log(colorsUnique);

// <!--------------------------------------------------------------------------------------------------------------->

// 13. Write a js program to count total number of duplicate elements in an array.

// const counts = {};
// const sampleArray = ["a", 1, "b", 1, "b"];
// sampleArray.forEach(function (x) {
//   counts[x] = (counts[x] || 0) + 1;
// });
// console.log(counts);

// <!--------------------------------------------------------------------------------------------------------------->

// 14. Write a js program to delete all duplicate elements from an array.

// var myArr = [1, 2, 2, 2, 3, "hello", "hello"];
// var delldub = new Set(myArr);
// myArr = [...delldub];
// console.log(myArr);

// <!--------------------------------------------------------------------------------------------------------------->

// 15. Write a js program to merge two array to third array.
// var firstArray = [23, 454, 6656, 4534234, 24];
// var secondArray = ["hello", "pakistan", "sylani"];
// var combined = firstArray.concat(secondArray);
// console.log(combined);

// <!--------------------------------------------------------------------------------------------------------------->

// 16. Write a js program to find reverse of an array.

// var reverseArray = ["syalni", "pakistan", "umair", 4551, 4523, 2020];
// console.log("before reverse:", reverseArray);
// var reverse = reverseArray.reverse(reverseArray);
// console.log("After reverse:", reverseArray);

// <!--------------------------------------------------------------------------------------------------------------->

// 17. Write a js program to put even and odd elements of array in two separate array.

// function countEvenOdd(arr, arr_size) {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i < arr_size; i++) {
//     if (arr[i] & (1 == 1)) odd++;
//     else even++;
//   }
//   console.log("odd:", odd);
//   console.log("even:", even);
// }
// var arr = [4, 5, 6, 7, 8, 34, 65, 78, 23];
// let n = arr.length;
// countEvenOdd(arr, n);

// <!--------------------------------------------------------------------------------------------------------------->

// 18. Write a js program to search an element in an array.

// function findInArray(ar, val) {
//   for (var i = 0, len = ar.length; i < len; i++) {
//     if (ar[i] === val) {
//       // strict equality test
//       return i;
//     }
//   }
//   return 1;
// }
// var ar = ["Rudi", "Morie", "Halo", "Miki", "Mittens", "Pumpkin"];
// alert(findInArray(ar, "halo"));

// <!--------------------------------------------------------------------------------------------------------------->

// 19. Write a js program to sort array elements in ascending or descending order.

// let numbers = [5, 13, 1, 44, 32, 15, 500];

// let lowestToHighest = numbers.sort((a, b) => a - b);
// console.log(lowestToHighest);

// let highestToLowest = numbers.sort((a, b) => b - a);
// console.log(highestToLowest);

// <!--------------------------------------------------------------------------------------------------------------->
// 20. Write a js program to sort even and odd elements of array separately.

// const arr = [2, 5, 2, 6, 7, 1, 8, 9];
// const isEven = (num) => num % 2 === 0;
// const sorter = (a, b) => {
//   if (isEven(a) && !isEven(b)) {
//     return -1;
//   }
//   if (!isEven(a) && isEven(b)) {
//     return 1;
//   }
//   return a - b;
// };
// const oddEvenSort = (arr) => {
//   arr.sort(sorter);
// };
// oddEvenSort(arr);
// console.log(arr);

// <!--------------------------------------------------------------------------------------------------------------->
// 21. Write a js program to left rotate an array.

// var leftrotate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = leftrotate.length - 1; i > -1; i--) {
//   console.log(leftrotate[i]);
// }

// <!--------------------------------------------------------------------------------------------------------------->
// 22. Write a js program to right rotate an array.

// var rightrotate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < rightrotate.length; i++) {
//   console.log(rightrotate[i]);
// }

// <!--------------------------------------------------------------------------------------------------------------->

// 23. Write a js program to print day of week name using switch case.
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }
// console.log("Days is ", day);

// <!--------------------------------------------------------------------------------------------------------------->

// 24. Write a js program print total number of days in a month using switch case.

// var month = 12;
// var days;
// switch (month) {
//   case 1:
//     days = 31;
//     break;
//   case 2:
//     days = "28 or 29";
//     break;
//   case 3:
//     days = 30;
//   case 4:
//     days = 30;
//     break;
//   case 5:
//     days = 30;
//     break;
//   case 6:
//     days = 31;
//     break;
//   case 7:
//     days = 30;
//     break;
//   case 8:
//     days = 31;
//     break;
//   case 9:
//     days = 30;
//     break;
//   case 10:
//     days = 31;
//     break;
//   case 11:
//     days = 30;
//     break;
//   case 12:
//     days = 31;
//     break;
// }
// console.log("Days in this month of", month, "is", days);

// <!--------------------------------------------------------------------------------------------------------------->

// 25. Write a js program to check whether an alphabet is vowel or consonant using switch case.

// var alphabet = prompt();
// switch (alphabet) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     alphabet = "vowel";
//     break;

//   default:
//     alphabet = "constant";
//     break;
// }
// console.log(alphabet);

// <!--------------------------------------------------------------------------------------------------------------->

// 26. Write a js program to find maximum between two numbers using switch case.

// var num1 = prompt("enter num 1");
// var num2 = prompt("enter num 2");
// switch (num1 > num2) {
//   case true:
//     console.log("greater number is num1 =", num1);
//     break;
//   case false:
//     console.log("greater number is num2 =", num2);
//     break;
// }

// <!--------------------------------------------------------------------------------------------------------------->

// 27. Write a js program to check whether a number is even or odd using switch case.

// var number = prompt(parseInt());
// switch (number % 2 == 0) {
//   case true:
//     console.log("Entered number is even", number);
//     break;

//   case false:
//     console.log("Entered number is odd", number);
//     break;
// }

// <!--------------------------------------------------------------------------------------------------------------->

// 28. Write a js program to check whether a number is positive, negative or zero using switch case.

// var num = prompt("enter number to check");
// switch (num > 0) {
//   case true:
//     console.log("+ve");
//     break;
//   case false:
//     console.log("-ve");
//     break;
//   default:
//     console.log("0");
// }

// <!--------------------------------------------------------------------------------------------------------------->

// 29. Write a js program to find roots of a quadratic equation using switch case

// let root1, root2;

// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// let discriminant = b * b - 4 * a * c;

// if (discriminant > 0) {
//   root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//   console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// <!--------------------------------------------------------------------------------------------------------------->

// 30. Write a js program to create Simple Calculator using switch case.

// let result;

// const operator = prompt("Enter operator ( either +, -, * or / ): ");

// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     console.log(`${number1} + ${number2} = ${result}`);
//     break;

//   case "-":
//     result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
//     break;

//   case "*":
//     result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);
//     break;

//   case "/":
//     result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
//     break;

//   default:
//     console.log("Invalid operator");
//     break;
// }

// <!--------------------------------------------------------------------------------------------------------------->
