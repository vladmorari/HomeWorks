// // 1             Write a function to check whether input is an array or not without using isArray
// const arr = [2, 5, 8, 10];

// const isArray = (e) => {
//   if (e !== null && e !== undefined) return e.constructor === Array;
//   return false;
// };

// console.log(isArray(arr));

// // 2           Clone an array without using JSON.stringify()

// let originArr = [5, 6, 7];
// let cloneArr = [...originArr];
// cloneArr[0] = 1;
// console.log("origin", originArr);
// console.log("clone", cloneArr);

// // 3  Create a function that will create an array made of length elements; fill elements with their indexes

// const createArr = (len) => {
//   let arr = [];
//   for (let i = 0; i < len; i++) arr.push(i);
//   return arr;
// };

// console.log(createArr(8));

// //4   Create a function that will return last even element of the array
// let evenElArr = [4, 8, 6, 7, 7, 8, 9, 7];
// const returnLastEven = (arr) => {
//   return arr.reverse().find((el) => el % 2 == 0);
// };
// console.log(returnLastEven(evenElArr));

// //5  Write a function that will flatten an array without using flat()
// //  (a) just with numbers

// // var myArr = [[1], [[3, [4]], 2], 3, [5]];

// // const arrFlatten = (arr) => {
// //   return arr.toString().split(",").map(Number);
// // };
// // console.log(myArr);
// // console.log(arrFlatten(myArr));

// // (b) numbers & string
// var myArr = [[1], [[3, ["ab"]], 2], 3, [5]];

// const arrFlatten = (arr) => {
//   const arrString = arr.toString().split(",");
//   let newArr = [];
//   arrString.forEach((item) => {
//     if (
//       typeof parseFloat(item) == "number" &&
//       !Number.isNaN(parseFloat(item))
//     ) {
//       newArr.push(parseFloat(item));
//     } else {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// };
// console.log(arrFlatten(myArr));

// //6  Write a function to shuffle an array

// const arrShuffle = (arr) => {
//   return arr.sort(() => 0.5 - Math.random());
// };

// console.log(arrShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// // if a-b > 0 then he will change their place,
// // in this case a is 0.5 and b sometimes will be less than 0.5 and sometimes not
// //in this case some elements will change their places and other won't

