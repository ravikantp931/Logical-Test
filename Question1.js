/*
Define an array of numbers (use any random numbers).
 Write a program to print only the even numbers of the array.
  Do not use any library functions, need to do via for loops only
*/

let arr = [2, 4, 5, 6, 7, 8, 9, 1];

function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i])
        }
    }
}
even(arr);