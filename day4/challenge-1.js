const data = require("./data.js");
const input = data.input.split(",").map(Number);
const rawBoards = data.boards.split("\n");
const rawBoardsMatrix = [];
const finalBoardTensor = [];

// console.log(rawBoards);
let temp = [];
rawBoards.forEach((board) => {
  if (board !== "") {
    temp.push(board);
  }
  if (board === "") {
    rawBoardsMatrix.push(temp);
    temp = [];
  }
});

// console.log(rawBoardsMatrix);
temp = [];
let tempColumn = -1;
rawBoardsMatrix.forEach((board, boardIndex) => {
  board.forEach((element) => {
    const row = element
      .split(" ")
      .filter((x) => {
        if (x !== "") {
          return x;
        }
      })
      .map((z) => {
        tempColumn++;
        return {
          column: tempColumn,
          value: parseInt(z),
          marked: false,
        };
      });
    temp.push(row);
    tempColumn = -1;
  });
  finalBoardTensor.push(temp);
  temp = [];
});

// console.log(finalBoardTensor); // entire array of matrices
// console.log(finalBoardTensor[0]); // a matrix (a single board)
// console.log(finalBoardTensor[0][0]); // a single row of a board
