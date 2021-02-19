//                                                          1 isAnObject

// function isAObject(value) {
//   return typeof value === "object" && value !== null;
// }
// console.log(isAObject(null));

//                                                         2     A without B
// function aWithouB(objA, objB) {
//   let result = {};
//   let keys = Object.keys(objB);
//   for (let key in objA) {
//     if (!keys.includes(key)) {
//       result[key] = objA[key];
//     }
//   }
//   return result;
// }

// const oA = {
//   a: "aa",
//   b: "b",
//   c: "cd",
//   d: "d",
// };

// const oB = {
//   a: "a",
//   b: "bc",
//   e: "e",
//   f: "f",
// };

// console.log("object A", oA);
// console.log("object B", oB);
// console.log("object A != B", aWithouB(oA, oB));

//                                                           3      object is Empty
// function isEmpty(obj) {
//   for (var prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       return false;
//     }
//   }
//   return JSON.stringify(obj) === JSON.stringify({});
// }
// console.log(isEmpty(2));

//                                                           4      is equal

// const oA = {
//   a: "aa",
//   b: "b",
//   d: "d",
//   c: "cd",
// };
// const oB = {
//   a: "aa",
//   b: "b",
//   c: "cd",
//   d: "d",
// };

// /////bad function
// function isEqual(objA, objB) {
//   return JSON.stringify(objA) === JSON.stringify(objB);
// }
// console.log("A is equal B ", isEqual(oA, oB));

// ///this is better
// function isEqual2(objA, objB) {
//   const keys1 = Object.keys(objA);
//   const keys2 = Object.keys(objB);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (objA[key] !== objB[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log("A is equal B ", isEqual2(oA, oB));

//                                                           5      intersections
// function aWithouB(objA, objB) {
//   let result = {};
//   let keys = Object.keys(objB);
//   for (let key in objA) {
//     if (keys.includes(key)) {
//       result[key] = objA[key];
//     }
//   }
//   return result;
// }

// const oA = {
//   a: "aa",
//   b: "b",
//   c: "cd",
//   d: "d",
// };

// const oB = {
//   a: "a",
//   b: "bc",
//   e: "e",
//   f: "f",
// };

// console.log("object A", oA);
// console.log("object B", oB);
// console.log("object A comon keys with B", aWithouB(oA, oB));

//                                                             6     getValueByPath

var obj = {
  A1: { path: "01" },
  A2: { path: "02" },
  A3: { path: [1, 2, 3] },
};

function getValueByPath(obj, path) {
  let paths = path.split("."),
    current = obj,
    i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

console.log(getValueByPath(obj, "A3.path.1"));
