export function bombIndexes(numberOfCells, numberOfBombs) {
  let array1 = [];
  for (let i = 0; i < numberOfBombs; i++) {
    let randomNumber = Math.floor(Math.random() * numberOfCells + 1);
    if (i === 0) {
      array1.push(randomNumber);
    } else {
      if (array1.includes(randomNumber)) {
        i--;
      } else {
        array1.push(randomNumber);
      }
    }
  }
  return array1;
}

export function generateMinefield(numberOfCells, numberOfBombs, width) {
  let bombs = bombIndexes(numberOfCells, numberOfBombs);

  let array2 = [];
  for (let i = 0; i < numberOfCells; i++) {
    if (bombs.includes(i)) {
      array2.push("X");
    } else {
      array2.push(null);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let a = i - width;
    let b = i - width + 1;
    let c = i + 1;
    let d = i + width + 1;
    let e = i + width;
    let f = i + width - 1;
    let g = i - 1;
    let h = i - width - 1;
    let sum = 0;
    const x = i % width;
    const y = Math.floor(i / width);
    if (array2[i] === "X") {
      array2[i] === "X";
    } else {
      if (y > 0 && array2[a] === "X") {
        sum++;
      }
      if (y > 0 && x < width - 1 && array2[b] === "X") {
        sum++;
      }
      if (x < width - 1 && array2[c] === "X") {
        sum++;
      }
      if (x < width - 1 && y < width - 1 && array2[d] === "X") {
        sum++;
      }
      if (y < width - 1 && array2[e] === "X") {
        sum++;
      }
      if (y < width - 1 && x > 0 && array2[f] === "X") {
        sum++;
      }
      if (x > 0 && array2[g] === "X") {
        sum++;
      }
      if (x > 0 && y > 0 && array2[h] === "X") {
        sum++;
      }
      array2[i] = sum;
    }
  }
  return array2;
}

export function printMinefield(arr, width) {
  for (let i = 0; i < width; i++) {
    let line = "";
    for (let j = 0; j < width; j++) {
      line += arr[i * width + j];
    }
    console.log(line);
  }
}

export function generateUserField(numberOfCells) {
  let arr = [];
  for (let i = 0; i < numberOfCells; i++) {
    arr.push("U");
  }
  return arr;
}

export function findReveals(
  index,
  minefield,
  userField,
  width,
  revealSoFar = []
) {
  // Показываю клетку, на которую нажал юзер
  revealSoFar.push(index);

  // Если нажатая клетка является цифрой, то показываю только ее
  if (minefield[index] !== 0) {
    return [index];
  }

  // Подготовка моих 2д координат
  const x = index % width;
  const y = Math.floor(index / width);

  let a = index - width;
  let b = index - width + 1;
  let c = index + 1;
  let d = index + width + 1;
  let e = index + width;
  let f = index + width - 1;
  let g = index - 1;
  let h = index - width - 1;
  // surrounding - массив с индексами моего окружения
  let surrounding = [];
  if (y > 0) {
    surrounding.push(a);
  }
  if (y > 0 && x < width - 1) {
    surrounding.push(b);
  }
  if (x < width - 1) {
    surrounding.push(c);
  }
  if (x < width - 1 && y < width - 1) {
    surrounding.push(d);
  }
  if (y < width - 1) {
    surrounding.push(e);
  }
  if (y < width - 1 && x > 0) {
    surrounding.push(f);
  }
  if (x > 0) {
    surrounding.push(g);
  }
  if (x > 0 && y > 0) {
    surrounding.push(h);
  }

  // Не дает случиться infinite loop
  // Если мы уже открыли клетку, то не проверяем ее на окружение
  surrounding = surrounding.filter((index) => {
    return !revealSoFar.includes(index);
  });

  // Проверяю 8 клеток моего окружения для пустой клетки
  // Они либо будут пустыми клетками, либо цифрами
  for (let i = 0; i < surrounding.length; i++) {
    if (userField[surrounding[i]] === "U") {
      let found = minefield[surrounding[i]];

      // Если клетка моего окружения - пустышка, то мне нужно повторить процесс для новой пустышки
      // Рекурсия привет!
      if (found === 0) {
        revealSoFar = findReveals(
          surrounding[i],
          minefield,
          userField,
          width,
          revealSoFar
        );
      }

      // Если клетка - цифра, то просто ее показываем/пушим в массив
      if (typeof found === "number" && found > 0) {
        revealSoFar.push(surrounding[i]);
      }
    }
  }

  return revealSoFar;
}

// Мапим поле юзера, чтобы осталось только поле из 10 ячеек не цифр.
// Тогда юзер победил
export function hasWon(userField, numberOfBombs) {
  return (
    userField.filter((cell) => {
      return typeof cell !== "number";
    }).length === numberOfBombs
  );
}
