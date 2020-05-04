// todo

// Hint button
const button = document.querySelector('#show-hint');
button.addEventListener('click', (event) => {
  // find the hint and show it
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
});


// 1. find all tile
// 2. for each tile:
// 3. listen for click event
// 4. when clicked:
// 5. if neighbor is empty:
// 6. swap!
// 7. check if we have won.

const neighborIsEmpty = (tile) => {
  const tileX = tile.cellIndex;
  const tileY = tile.parentElement.rowIndex;

  const emptyTile = document.querySelector('.empty');
  const emptyX = emptyTile.cellIndex;
  const emptyY = emptyTile.parentElement.rowIndex;

  // same row - column difference must be 1.
  // same column - row difference must be 1.
  if (emptyY == tileY && Math.abs(tileX - emptyX) == 1) {
    return true;
  } else if (emptyX == tileX && Math.abs(tileY - emptyY) == 1) {
    return true;
  }
  return false;
};

const swapWithEmpty = (tile) => {
  // Do the swap!
  // 1. empty tile becomes this tile
  const emptyTile = document.querySelector('.empty');
  emptyTile.classList.remove('empty');
  emptyTile.innerText = tile.innerText;

  // 2. tile becomes the empty tile!
  tile.classList.add('empty');
  tile.innerText = '';
};

const checkForWin = () => {
  const tiles = document.querySelectorAll('td');
  const numbers = Array.from(tiles).map((tile) => {
    return Number.parseInt(tile.innerText, 10);
  });
  const perfect = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN';
  return perfect == numbers.join();
};

const tiles = document.querySelectorAll('td');
console.log(tiles);

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    if (neighborIsEmpty(tile)) {
      swapWithEmpty(tile);
      if (checkForWin()) {
        alert('Congratulations!');
      }
    }
  })
});
