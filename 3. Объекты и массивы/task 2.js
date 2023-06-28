// Задание 2 - Обьекты и массивы

// Задание: Требуется реализовать функцию countFromArr, которая позволяет подсчитать значения массива. На вход поступает массив, на выход получаем объект, где ключ - это элемент массива, а значение - его кол-во в массиве

// const arr = [1, 1, 1, 'test', 'test']
// const res = countFromArr(arr)
// console.log(res) // { 1: 3, test: 2 }

function countFromArr(arr) {
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (countObj[element]) {
      countObj[element] += 1;
    } else {
      countObj[element] = 1;
    }
  }
  return countObj;
}

const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res);
