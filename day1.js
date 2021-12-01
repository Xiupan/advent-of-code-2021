const rawData = require("./day1-data.js");
const dataArray = rawData.rawInputData.split("\n");

// convert all strings to numbers
dataArray.forEach((element, index) => {
  dataArray[index] = parseInt(element);
});

let count = 0;
dataArray.forEach((element, index) => {
  if (dataArray[index + 1] > dataArray[index]) {
    count++;
  }
});

console.log(count);
