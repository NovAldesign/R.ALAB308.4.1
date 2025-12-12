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

// // // Array
// Part 2
// // Split the string into rows
// const rows = str.split('\n');

// // Split the first row to determine number of columns 
// const firstRow = rows[0].split(',');
// const numColumns = firstRow.length;

// console.log(`Number of columns: ${numColumns}`); 

// // Create the two-dimensional array
// const data = [];

// // Loop through each row, split by commas
// for (let i = 0; i < rows.length; i++) {
//   const currentRow = rows[i].split(',');
//   data.push(currentRow);
// }

// console.log(data);

// 
  [ 'ID', 'Name', 'Occupation', 'Age' ],
  [ '42', 'Bruce', 'Knight', '41' ],
  [ '57', 'Bob', 'Fry Cook', '19' ],
  [ '63', 'Blaine', 'Quiz Master', '58' ],
  [ '98', 'Bill', "Doctor's Assistant", '26' ]

// Part 3