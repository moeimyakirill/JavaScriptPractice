// Задание 1 - Обьекты и массивы

//Задание: Реализовать функцию convertArrToObj, которая на вход принимает массив значений, а на выход отдает объект, где ключ - это индекс элемента в массиве, а значение - сам элемент

// const arr = [1, null, 'test', undefined]
// const obj = convertArrToObj()
// console.log(obj) // { 0: 1, 1: null, 2: 'test', 3: undefined }

function convertArrToObj(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}

const arr = [1, null, 'test', undefined];
const obj = convertArrToObj(arr);
console.log(obj);
