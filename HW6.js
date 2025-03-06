//----------1.Какой результат работы кода и почему? Выберите один ответ.
// function greet(name) {
//     if (name === undefined) {
//         return "Hello, stranger!";
//     }
//     else {
//         return "Hello, " + name + "!";
//     }
// }
// console.log(greet());      // Hello, stranger!  если аргумент не передан, его значение будет undefined и 
                             // соответственно сработает условие if (name === undefined) и вернет "Hello, stranger!"

// ---------Варианты ответов:
//     a. "Hello, stranger!"
//     b. "Hello, undefined!"
//     c. Ошибка: "name is not defined"
//     d. Ошибка: "greet() takes exactly 1 argument (0 given)"


// ------------2. Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию
// function greet(name) {
//     return "Hello, " + name + "!";
// }
// console.log(greet('Mark'));   // Hello, Mark!


// -----------3.Напишите функцию с калькулятором (можно использовать код с предыдущей домашней работы), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.

Пример:  
// function calculate(a, b, operator)
// { if (operator === '+') {
//     return a + b;
// }
//   if (operator === '-') {
//     return a - b;
// }
//   if (operator === '*') {
//     return a * b;
//     }   
//   else (operator === '/') 
//     return a / b;
//     }

// console.log(calculate(5, 10, '/')); // 15


// ----4. Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

//     "Hello world!"
//     "!Hola mundo!"
//     "Hallo wereld!"
//     "Пpивeт мир!"

// Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию.

// function getGreetings() {
//     return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
// };
// console.log(getGreetings());


// getGreetings = function() {
//     return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
// };
// console.log(getGreetings());

// getGreetings = () => ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
// console.log(getGreetings());

//------5. Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

// -----6. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции)
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.
// function snail() {
//     let days = 0;
//     let height = 0;
//     while (height <= 5) {
//         height += 3;
//         days++;
//         if (height >= 5) {
//             return days;
//         }
//         height -= 2;
//     }
// };
// console.log(snail());

// -------7. Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива. 
// Если элемент массива не число, пропускаем этот элемент
// 

// const sum = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             result += arr[i];
//         }
//     }
//     return result;
// };
// console.log(sum([1, 2, 3, 4, 5, 6, 'Hello', 'World'])); // 21

// --------8. Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.
// words = ['Tatatatatatatata', 'dadd', 'top', 'Kukukuku', 'hello']

// const filterWords = words.filter((el) => el.length > 5);
// console.log(filterWords);
