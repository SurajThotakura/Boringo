import { bingoDimension } from "../state/jotai";

const validString = "1".repeat(bingoDimension);

export function validateBingoCard(cardString: string, n: number) {
  // check rows, columns and diagonals
  const rowsArray = []
  const columnsArray = []
  let rightDiag = "";
  let leftDiag = "";
  for(let x=0; x<n; x++){
    let row = ""
    let column = ""
    leftDiag = leftDiag + cardString[x * (n + 1)];
    rightDiag = rightDiag + cardString[n - 1 + x * (n - 1)];
    for(let y=0; y<n; y++){
        row = row + cardString[x*n+y]
        column = column + cardString[x+n*y]
    }
    rowsArray[x] = row
    columnsArray[x] = column
  }
  if(rowsArray.includes(validString)){
    return true
  }
  if(columnsArray.includes(validString)){
    return true
  }
  if (leftDiag === validString) {
    return true;
  }
  if (rightDiag === validString) {
    return true;
  }
  return false;
}
