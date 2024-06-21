/*
 * проверка на выигрыш заключается в проверке каждого элемента одномерного массива
 * длины fieldSize*fieldSize. используя индекс элемента, мы создаем массивы выигрышных
 * последовательностей длиной sequenceSize.
 */
export function computerWinner(gameState, sequenceSize = 5, fieldSize = 19) {
  const { cells } = gameState;
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;
    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return result;
  }

  function getSequenceIndexes(i) {
    const res = [
      [], //горизонтальная - последовательность
      [], //диагональная \
      [], //диагональная /
      [], //вертикальная |
    ];
    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }

  return undefined;
}
