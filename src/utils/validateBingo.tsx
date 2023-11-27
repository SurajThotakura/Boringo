export function validateBingoCard(cardString: string, n: number) {
  const validString = "1".repeat(n);

  // check rows
  const rowsArray = []
  for(let x=0; x<n; x++){
    let row = ""
    for(let y=0; y<n; y++){
        row = row + cardString[x*n+y]
    }
    rowsArray[x] = row
  }
  if(rowsArray.includes(validString)){
    return true
  }

  // check columns
  const columnsArray = []
  for(let x=0; x<n; x++){
    let column = ""
    for(let y=0; y<n; y++){
        column = column + cardString[x+n*y]
    }
    columnsArray[x] = column
  }
  if(columnsArray.includes(validString)){
    return true
  }

  // check diagonals

  let rightDiag = "";
  let leftDiag = "";
  for (let x = 0; x < n; x++) {
    leftDiag = leftDiag + cardString[x * (n + 1)];
    rightDiag = rightDiag + cardString[n - 1 + x * (n - 1)];
  }
  if (leftDiag === validString) {
    return true;
  }
  if (rightDiag === validString) {
    return true;
  }
  return false;
}
