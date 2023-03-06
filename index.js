//array of languages
// let arrayLang = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

//QUESTION 2a
//Add ‘Kotlin’ to the end of the array
// arrayLang.push('Kotlin')
// console.log(arrayLang)

//QUESTION 2b
//Add ‘Java’ after ‘Ruby’
// arrayLang.splice(3,0, 'Java')
// console.log(arrayLang)

//QUESTION 2c
//Remove the first item in the array
// arrayLang.shift()
// console.log(arrayLang)


//QUESTION 2d
//Add ’Scala’ and ‘Swift’ to the beginning of the array
// arrayLang.splice(0,0, 'Scala', 'Swift')
// console.log(arrayLang)


//QUESTION 2e
//Replace ‘PHP’ with ‘Go’ and ‘Rust’
// arrayLang.splice(5,1,"GO","Rust")
// console.log(arrayLang)


//QUESTION 3
//What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//   			return fruit;

//ANSWER TO QUESTION 3  		}
//Index 2 (banana) would change to Orange as shown below:
//['apple', 'mango', 'orange']

//QUESTION 4
// Write a function that accepts an array of numbers as an argument.
//Return the maximum value in the array.
//e.g., max([4, 5, 10, -2]) // maximum value is 10

//ANSWER TO QUESTION 4
// const arrayNumb = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// function maxNumOfArray(maxNumb) {
// let max = maxNumb[0];
// for (let i = 1; i < maxNumb.length; i++) {
//     if (maxNumb[i] > max) {
//             max = maxNumb[i];
//         }   }
//     return max;
// }
// console.log(maxNumOfArray(arrayNumb));



//QUESTION 5
//Write a function called valTimesIndex which accepts an array of numbers and
// returns a new array with each value multiplied by the index it is at in the array:
//e.g., // valTimesIndex([1,2,3]) // [0,2,6]
//		valTimesIndex([5,10,15]) // [0,10,30]

// const indexArray = [10, 20, 30, 40, 50];
// const multipliedArr = valTimesIndex(indexArray);
// function valTimesIndex(arr) {
//   return arr.map((val, index) => val * index);
// }
// console.log(multipliedArr); // Output: [0, 2, 6, 12, 20]

