// let arr = ['2','1','1','2','3'];

// let reversedArr = [];

// function checkPanlidrome(){
//     for(let i=arr.length-1; i>=0; i--){
//         reversedArr.push(arr[i]);
//     }
//     if(arr.join('') === reversedArr.join('')){
//         console.log("The given word is a palindrome");
//     }
//     else{
//         console.log("The given word is not a palindrome");
//     }
// }
// checkPanlidrome();

// we've an array  we've to reverse it only in 3 iterations we've an array of 6 elements

// let array = [1,2,3,4,5,6,4];
// let reversedArray=[];
// function reverseIn3Iterations(){
//     for(let i = array.length - 1; i >=0; i-=2){
//        reversedArray.push(array[i], array[i-1]);
//     }
//     console.log(reversedArray);
// }

// reverseIn3Iterations();

// we've to flatten an array

// let  array = [1,3,5,2,1,4,2,3,10,44];

// function flattenArray(){
//     for(let i=0; i<array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(array[i] === array[j]){
//                 array.splice(j,1);
//             }
//             else{
//                 continue;
//             }
//     }
// }
// console.log(array);
// }
// flattenArray();


// converts multidimensional array into single dimensional array

// let multiDimensionalArray = [1,2,[3,4],[5,6],[7,8,9],10];

// let singleDimensionalArray = [];

// function convertToSingleDimensionalArray(){
//     for(let i=0; i<multiDimensionalArray.length; i++){
// if(Array.isArray(multiDimensionalArray[i])){
//     for(let j = 0 ; j < multiDimensionalArray[i].length; j++){
//         singleDimensionalArray.push(multiDimensionalArray[i][j]);
//     }
// }
// else{
//     singleDimensionalArray.push(multiDimensionalArray[i]);
// }
//     } 
//     console.log(singleDimensionalArray);    
// }

// convertToSingleDimensionalArray();


// Sort and array without using sort function

// let array = [5, 13, 8, 1, 12, 73];
// let temp;
// function sortArray() {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//     }
// }
//     console.log(array);
// }
// sortArray();

// Max number in an array
// let array = [5,3,8,1,2,7];
// let max;
// function maxNumber(){
//     for(let i = 0 ; i < array.length; i++){
//          max = array[i];
//         if(max > array[i+1]){
//             array[i+1] = max;
//         }
//     }
//     console.log(max);
// }
// maxNumber();


// Min number in an array
// let array = [5,3,8,100,32,7];
// let min;
// function minNumber(){
//     for(let i = 0 ; i < array.length; i++){
//          min = array[i];
//         if(min < array[i+1]){
//             array[i+1] = min;
//         }
//     }
//     console.log(min);
// }
// minNumber();

// Second largest number in an array
// let array = [100, 345, 44, 19, 33, 460, 21]

// function secondLargestNumber() {
//     let temp;
//     for (let i = 0; i < array.length; i++) {
//         secondLargest = i - 1;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     console.log("second largest number is: ", array[array.length - 2]);
// }

// secondLargestNumber();

// put 0's at the end of an array
// let array = [1,0,2,0,4,3,0,5,0];
// let resultArray = [];

// const moveZerosToEnd = () => {
// let count = 0;
// for(let i = 0; i < array.length; i++){
//     if(array[i] !== 0){
//         resultArray.push(array[i]);
//     }
//     else{
//         count++;
//     }   
// }
// for(let i = 0; i < count; i++){
//     resultArray.push(0);
// }
// console.log(resultArray);   
// }

// moveZerosToEnd();



// let a = [[12, 44], [41, 5], [4, 23]];
// let a2 = []; // 12,44,41,5,4,23
// function transposeMatrix() {
//     for (let i = 0; i < a.length - 1; i++) {
//         for (let j = 0; j < a.length; j++) {
//             a2.push(a[j][i]);
//         }
//     }
//     for (let i = 0; i < a2.length; i++) {
//         for (let j = i + 1; j < a2.length; j++) {
//             if (a2[i] > a2[j]) {
//                 let temp = a2[i];
//                 a2[i] = a2[j];
//                 a2[j] = temp;
//             }
//         }
//     }
//     let cols = 2;
//     let result = [];
//     for (let i = 0; i < a2.length; i += cols) {
//         result.push(a2.slice(i, i + cols));
//     }
//  console.log(result);

// }
// transposeMatrix();

