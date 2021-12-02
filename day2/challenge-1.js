const rawData = require("./data.js");
const dataArray = rawData.rawData.split("\n");

const directionSum = {
  horizontal: 0,
  depth: 0,
};

dataArray.forEach((data) => {
  const command = data.split(" ");
  const direction = command[0];
  const distance = parseInt(command[1]);

  if (direction === "forward") {
    directionSum.horizontal += distance;
  } else if (direction === "down") {
    directionSum.depth += distance;
  } else if (direction === "up") {
    directionSum.depth -= distance;
  }
});

console.log(directionSum);
console.log(`Answer: ${directionSum.horizontal * directionSum.depth}`);
