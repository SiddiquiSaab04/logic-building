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
let array = [5,3,8,100,32,7];
let min;
function minNumber(){
    for(let i = 0 ; i < array.length; i++){
         min = array[i];
        if(min < array[i+1]){
            array[i+1] = min;
        }
    }
    console.log(min);
}
minNumber();

