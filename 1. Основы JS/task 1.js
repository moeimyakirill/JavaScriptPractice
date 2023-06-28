//Задание 1 - Основы JS

// Задание: Нужно написать функцию, которая возвращает тип входного аргумента
// На входе: один аргумент, любого значения
// На выходе: строка, с типом входного аргумента

function getType(inp) {
  return typeof inp;
}

console.log(getType("That isn't a string"));
console.log(getType(8));
console.log(getType(false));
