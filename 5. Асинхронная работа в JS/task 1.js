// Задание 1 - Асинхронная работа в JS

// Задание: Что выведется в консоль?

console.log("start");

setTimeout(() => console.log("timeout"), 0);

new Promise((resolve, reject) => {
    console.log("promise constructor");

    reject();
})
    .then(() => console.log("p1"))
    .catch(() => console.log("p2"))
    .catch(() => console.log("p3"))
    .then(() => console.log("p4"))
    .then(() => console.log("p5"));

console.log("final");

// В консоль будет выводиться разный результат в зависимости от IDE, в одних случая вывод будет таким:
//start
//promise constructor
//final
//p2
//p4
//p5

//В других случаях вывод может быть таким:
//start
//promise constructor
//final
//p2
//p4
//p5
//timeout

//"timeout" выводится после "p5", что означает, что setTimeout выполнился после всех then-обработчиков промиса.
