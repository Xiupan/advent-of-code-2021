const data = require("./data.js");
const dataArray = data.data.split("\n");

let count = {
  0: {
    0: 0,
    1: 0,
  },
  1: {
    0: 0,
    1: 0,
  },
  2: {
    0: 0,
    1: 0,
  },
  3: {
    0: 0,
    1: 0,
  },
  4: {
    0: 0,
    1: 0,
  },
  5: {
    0: 0,
    1: 0,
  },
  6: {
    0: 0,
    1: 0,
  },
  7: {
    0: 0,
    1: 0,
  },
  8: {
    0: 0,
    1: 0,
  },
  9: {
    0: 0,
    1: 0,
  },
  10: {
    0: 0,
    1: 0,
  },
  11: {
    0: 0,
    1: 0,
  },
};

dataArray.forEach((element) => {
  const row = element.split("");

  row.forEach((r, i) => {
    if (r === "1") {
      count[i][1] += 1;
    } else {
      count[i][0] += 1;
    }
  });
});

const getRates = () => {
  let gammaBinaryStr = "";
  let epsilonBinaryStr = "";

  for (const key in count) {
    const element = count[key];
    if (element[0] > element[1]) {
      gammaBinaryStr += "0";
      epsilonBinaryStr += "1";
    } else {
      gammaBinaryStr += "1";
      epsilonBinaryStr += "0";
    }
  }

  return {
    gammaBinaryStr,
    epsilonBinaryStr,
  };
};

const rates = getRates();
const convertedGamma = parseInt(rates.gammaBinaryStr, 2);
const convertedEpsilon = parseInt(rates.epsilonBinaryStr, 2);
console.log(`Answer: ${convertedGamma * convertedEpsilon}`);
