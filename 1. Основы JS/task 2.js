//Задание 2 - Основы JS

// Задание: Что выведется в консоль и почему?

const a = () => console.log("a");
const b = () => console.log("b");
const c = a || b ? a() : b();
console.log(c);

// Вывод: 
// a
// undefined

// Объяснение: "a||b" проверяется, будет ли функция "a" истинным значением. "a" является истинным значением, 
// поэтому выводится "a". После вызова "a()", функция "a" не возвращает явное значение, поэтому "c" принимает значение "undefined".
