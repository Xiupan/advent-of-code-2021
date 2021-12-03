const _ = require("lodash");
const data = require("./data.js");
const dataArray = data.data.split("\n");

const count = {};
let oxygenRating = [];
let co2Rating = [];

dataArray.forEach((element) => {
  const row = element.split("");
  row.forEach((position, index) => {
    if (count[index] === undefined) {
      count[index] = {
        0: [],
        1: [],
      };
    }
    count[index][position].push(row);
  });
});

for (const key in count) {
  if (count[key]["1"].length >= count[key]["0"].length) {
    oxygenRating.push("1");
    co2Rating.push("0");
  } else {
    oxygenRating.push("0");
    co2Rating.push("1");
  }
}

// console.log(oxygenRating);
// console.log(co2Rating);

// 010111100100
const oxygenRatingBinary = _.flatten(
  _.intersection(
    count[0][0],
    count[1][1],
    count[2][0],
    count[3][1],
    count[4][1],
    count[5][1],
    count[6][1],
    count[7][0],
    count[8][0],
    count[9][1],
    count[10][0],
    count[11][0]
  )
).join("");
const oxygenParsed = parseInt(oxygenRatingBinary, 2);
console.log(oxygenParsed);

// console.log(count[8][0].length, count[8][1].length);
// console.log(count[9][0].length, count[9][1].length);

// 101000011011
const co2RatingBinary = _.intersection(
  count[0][1],
  count[1][0],
  count[2][1],
  count[3][0],
  count[4][0],
  count[5][0],
  count[6][0],
  count[7][1]
  //   count[8][1]
  //   count[9][0]
  //   count[10][1]
  //   count[11][1]
);
// console.log(co2RatingBinary);
// const co2Parsed = parseInt(co2RatingBinary, 2);
const co2Parsed = parseInt(
  ["1", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "1"].join(""),
  2
);
console.log(co2Parsed);

console.log(oxygenParsed * co2Parsed);
