const _ = require("lodash");
const data = require("./data.js");
const dataArray = data.data.split("\n");

const sampleData = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split("\n");

const doTheThing = (dataArray) => {
  let oxygenRating = 0;
  let co2Rating = 0;

  const indexCount = _.range(1, dataArray[0].length); // array from 1 to length of first row

  let count = { 0: [], 1: [] };

  const resetCount = () => {
    count = { 0: [], 1: [] };
  };

  const setCount = (data, position) => {
    resetCount();
    data.forEach((element) => {
      const row = element.split("");
      row.forEach((r, i) => {
        if (i === position) {
          if (r === "1" || r === 1) {
            count[1].push(row.join(""));
          } else {
            count[0].push(row.join(""));
          }
        }
      });
    });
    console.log(count);
    console.log("setCount complete.");
  };

  // oxygen
  setCount(dataArray, 0);
  indexCount.forEach((i) => {
    if (count[1].length >= count[0].length) {
      setCount(count[1], i);
    } else {
      setCount(count[0], i);
    }

    oxygenRating = count[1][0];
  });

  // carbon dioxide
  setCount(dataArray, 0);
  indexCount.forEach((i) => {
    if (count[0].length === 1 && count[1].length === 1) {
      // stop
      co2Rating = count[0][0];
    }

    if (count[0].length <= count[1].length) {
      setCount(count[0], i);
    } else {
      setCount(count[1], i);
    }
  });

  console.log(oxygenRating);
  console.log(co2Rating);
  console.log(parseInt(oxygenRating, 2) * parseInt(co2Rating, 2));
};

doTheThing(dataArray);

// console.log(parseInt("011001100111", 2) * parseInt("101010000100", 2));
