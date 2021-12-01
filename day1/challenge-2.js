const rawData = require("./challenge-1-data.js");
const dataArray = rawData.rawInputData.split("\n");

// convert all strings to numbers
dataArray.forEach((element, index) => {
  dataArray[index] = parseInt(element);
});

let count = 0;
dataArray.forEach((element, index) => {
  let windowA = dataArray[index] + dataArray[index + 1] + dataArray[index + 2];
  let windowB =
    dataArray[index + 1] + dataArray[index + 2] + dataArray[index + 3];
  if (!isNaN(windowA) && !isNaN(windowB) && windowB > windowA) {
    count++;
  }
});

console.log(count);
