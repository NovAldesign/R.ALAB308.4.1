// What do we know?
//  // Use a loop

// During our string we can encounter ONLY one of the following:
//  // comma - separate cells
//  // '\n' - separate row/line
//  // char - everything else - bottom

// What can we infer?
//  // 4 variables, 1 for each cell
//  // console.log(cell1, cell2, cell3, cell4);
//  // Looping over the string

// What is the input?
// // string

// What do they want (for output, datatype/format)?
// // print individual cells

// // Starting string - input
// let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// // Variables - to store data
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// // Cells track of commas / cells
// let commas = 0;

// // Looped over entire string.
// for (let i = 0; i < str.length; i++) {
//   //Saving value current char at the current index into a variable to make easier to use.
//   let current = str[i];

//   if (current == ",") {
//     // Move to the next cell
//     commas++;
//   } else if (current == "\n") {
//     console.log(cell1, cell2, cell3, cell4);
//     // Print all cells & reset cell/comma values for next line
//     commas = 0;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//   } else {
//     // For all other chars
//     // Add data to a cell
//     if (commas == 0) {
//         // If 0 commas add current char first cell
//       cell1 += current;
//     } else if (commas == 1) {
//       cell2 += current;
//     } else if (commas == 2) {
//       cell3 += current;
//     } else {
//       cell4 += current;
//     }
//   }

//   //Check if its the last index of loop.
//   if (i == str.length - 1) {
//     //if so, print last row
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }

//REFACTOR CODE

const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
// Part 2
/// Split the string into rows
let rows = str.split("\n");

// Get the first row to determine number of columns
let firstRow = rows[0].split(",");
let numColumns = firstRow.length;

console.log("Number of columns:", numColumns);

// Create two-dimensional array
let twoDArray = [];

for (let i = 0; i < rows.length; i++) {
  let currentRow = rows[i].split(",");
  twoDArray.push(currentRow);
}

console.log("Two-dimensional array:");
console.log(twoDArray);

// Part 3
let headers = twoDArray[0];
let lowercaseHeaders = [];

for (let i = 0; i < headers.length; i++) {
  lowercaseHeaders.push(headers[i].toLowerCase());
}

// Create array of objects
// Start at index 1 to skip the heading row
let arrayOfObjects = [];

for (let i = 1; i < twoDArray.length; i++) {
  // Create a new object for this row
  let obj = {};
  
  // Loop through each column in this row
  for (let j = 0; j < numColumns; j++) {
    // Use the lowercase header as the key
    // Use the current cell value as the value
    obj[lowercaseHeaders[j]] = twoDArray[i][j];
  }
  
  // Add the completed object to our array
  arrayOfObjects.push(obj);
}

console.log("Array of objects:");
console.log(arrayOfObjects);

// Part 4 - Not sure where I went wrong here.

// Remove the last element
arrayOfObjects.pop();
console.log("After removing last element:");
console.log(arrayOfObjects);

// Insert object at index 1
arrayOfObjects.splice(1, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log("\nAfter inserting Barry at index 1:");
console.log(arrayOfObjects);

// Add object to the end
arrayOfObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: 111 });
console.log("\nAfter adding Bilbo to the end:");
console.log(arrayOfObjects);

// Calculate average age
let totalAge = 0;

for (let i = 0; i < arrayOfObjects.length; i++) {
  totalAge += arrayOfObjects[i].age;
}

let averageAge = totalAge / arrayOfObjects.length;
console.log("\nAverage age:", averageAge);

// Part 5
// Get headers from the first object's keys
let csvHeaders = Object.keys(arrayOfObjects[0]);

// Capitalize first letter of each header
let capitalizedHeaders = [];
for (let i = 0; i < csvHeaders.length; i++) {
  let header = csvHeaders[i];
  capitalizedHeaders.push(header.charAt(0).toUpperCase() + header.slice(1));
}

// Create CSV string starting with headers
let csvString = capitalizedHeaders.join(",");

// Add each row of data
for (let i = 0; i < arrayOfObjects.length; i++) {
  csvString += "\n";
  
  let rowValues = [];
  for (let j = 0; j < arrayOfObjects.length; j++) {
    rowValues.push(arrayOfObjects[i][csvHeaders[j]]);
  }
  
  csvString += rowValues.join(",");
}

console.log("Final CSV string:");
console.log(csvString);