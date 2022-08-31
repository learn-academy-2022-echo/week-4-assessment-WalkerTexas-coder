// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("", () => {
//   it("", () => {
//     expect()
//   })
// })
// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shufflerFun",()=>{
  it("takes in an array, removes the first item from the array and shuffles the remaining content.",()=>{
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shufflerFun(colors1)).toEqual(expect.not.arrayContaining(["purple"]))
    expect(shufflerFun(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shufflerFun(colors1)).toEqual(expect.not.arrayContaining(["chartreuse"]))
    expect(shufflerFun(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// b) Create the function that makes the test pass.
// PseudoCode: 
  // Create a function called shufflerFun that takes in an array
const shufflerFun = (array) => {
  // create an empty result array to be returned
    // use the slice method on the array param
    // assign resArray the the slice method
 let resArr = array.slice(1)
  //  Iterate through the resArray in reverse using Fischer-Yates Algo
  for(let i = resArr.length -1 ; i > 0; i--) {
    // create random number with max value being the length plus 1
    let randomNum = Math.floor(Math.random() * i + 1)
    // create a temp variable that saves the item in the array at the current iteration
    let temp = resArr[i]
    // currentItem will be assigned too the item at the random number index in the array
    resArr[i] = resArr[randomNum]
    // item at random number index will be assigned to the temp variable
    resArr[randomNum] = temp
    // goal is to swap positions in the array
  }
  // return result array
  return resArr
}

// I got Red!
// I got Green! 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.
