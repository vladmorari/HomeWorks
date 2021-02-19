// //                                                  ex 1  -  2
// const arr = [];
// for (let i = 0; i < 15; i++) {
//   arr.push(parseInt(Math.random() * 100));
// }
// console.log(arr);
// console.log("max-", Math.max(...arr));
// console.log("min-", Math.min(...arr));
// //                                                        ex 3
// function displayDate(day, month, year) {
//   if (day < 10) {
//     day = "0" + day;
//   }
//   if (month < 10) {
//     month = "0" + month;
//   }
//   year = year.toString().slice(-2);
//   return `${day}-${month}-${year}`;
// }
// console.log("data", displayDate(20, 2, 2021));
// //                                                         ex 4
// function isPalindrome(s) {
//   return s == s.split("").reverse().join("") ? true : false;
// }
// console.log("Is polidrome :", isPalindrome("wow"));
// //                                                         ex 5
// function isInteger(x) {
//   return Number.isInteger(x);
// }
// console.log("Is integer :", isInteger(2.0));
//                                                             ex 6
// function isFloat(x) {
//   return Number(x) === x && x % 1 !== 0;
// }
// console.log("Is float :", isFloat(2.2));
//                                                             ex7
// function romanize(num) {
//   var lookup = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1,
//     },
//     roman = "",
//     i;

//   for (i in lookup) {
//     while (num >= lookup[i]) {
//       roman += i;
//       num -= lookup[i];
//     }
//   }
//   return roman;
// }

// console.log(romanize(6684));