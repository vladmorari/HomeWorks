// 1                         Write a JavaScript function that returns the function name.
//a
function myFunction() {
  return arguments.callee.name;
}
console.log(`function's name is '${myFunction()}'`);

//b
function functionName(f) {
  return f.name;
}
function functionX() {
  //some logic
}
console.log(functionName(functionX));

// 2                       Write a function that receives a random nr of string arguments
//                         and returns a story generated with the help of these arguments and other custom text.

function randomWords(...words) {
  return `${
    words.length != 0
      ? `
         Hi,
         I will create a funny little description about you,
         depending on how many words I receive from you.
         So the first word is "${words[0]}" 
         and I assume this is one of the most important things in your life
         ${
           words.length > 1
             ? `The second word is "${words[1]}"
         and this word will characterize you as a person ))${
           words.length > 2
             ? `
         I will not talk about the other words 
         but I will ask you to give them an explanation for each one :
         ${words}`
             : `
         And that's all)`
         }`
             : `And that's all)`
         }`
      : "There are no parameters"
  }
    `;
}
console.log(randomWords("work", "happy", "friends"));

// 3                 Extend the default values functionality (for function parameters) 
//                    to set to default not only the undefined values but also the null values (but not other falsy values)

//a
const myFunc = (a, b) => {
  let argB;
  b === null ? (argB = 2) : (argB = b);
  console.log("a=",a,"b=" , argB);
};
myFunc(5, null);

//b
function func(a, b = 2) {
  b === null ? func(a) : console.log("a=", a, "b=", b);
}
func(1, null);

// 4   Write a function that behaves differently depending on the nr of arguments being passed

function diffBehave(...words) {
  const areNumbers = words.every(function (element) {
    return typeof element === "number";
  });
  const areStrings = words.every(function (element) {
    return typeof element === "string";
  });
  if (areStrings)
    return `You offered me ${words.length} strings and i will sort them for you : ${words.sort()} `;
  if (areNumbers)
    return `You offered me ${
      words.length
    } numbers [${words}] and their sum is : ${words.reduce((a, b) => a + b)} `;
  else
    return `You gave me ${words.length} random tdataTypes values and they are : ${words} `;
}

console.log(diffBehave("a", "m","w", "v", "a"));
