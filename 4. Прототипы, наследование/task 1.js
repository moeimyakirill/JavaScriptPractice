// Задание 1 - Прототипы, наследование

// Задание: Реализовать функцию plus()
// (1).plus(2); // 3

function plus(num1) {
  const add = (num2) => plus(num1 + num2);
  add.valueOf = () => num1;
  return add;
}

console.log(plus(1)(2).valueOf());
