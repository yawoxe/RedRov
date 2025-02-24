/*--------1. 
Объявите две переменные: firstName и lastName.
Присвойте значение “John”  переменной firstName и значение “Adams”   переменной  lastName.
Выведите в консоль  значение firstName и lastName (должно показать John Adams).
Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Brandon Smith).

В итоге на экране должно быть две строки:
John Adams
Brandon Smith*/


// let firstName = 'John';
// let lastName = 'Adams';
// console.log(firstName, lastName);

// firstName = 'Brandon';
// lastName = 'Smith';
// console.log(firstName, lastName);



//------ 2  Выведите в консоль тип данных следующих переменных (использовать метод typeof()):
// let a;
// console.log(typeof a);      // underfined - переменная не определена

// let c = 9;
// console.log(typeof c);      // number

// let str = 'Hi 5!';
// console.log(typeof str);    //string - переменная в кавычках - значит строка

// let b = true;
// console.log(typeof b);      // boolean

// let y = 9 + '1';
// console.log(typeof y);      //string - есть строка, произошло соединение и все стало строкой
// console.log(y);        //91

// let x =  'a' / 6;
// console.log(typeof x);      //number (даже если результат NaN, тип данных будет number)
// console.log(x);        // NaN (разный тип данных) не удалось преобразовать строку в число

//------3 Подумайте, какие переменные логично объявить через const , пропишите их и выведите на экран
// var - переменная, которая может меняться, но сейчас не используется (глобальная переменная)
// let - переменная, которая может меняться, перезаписываться
// const - переменная, которая не будет меняться на протяжение всего кода. 

//
// const firstName = 'iana'
// const age = 5



//------4 Проверьте какие числа находятся между 10 и 20 и выведете на печать для каждой цифры true или false
// let number = 10;
// console.log(number >= 10 && number <= 20); 


//-------5 Что выведет код и почему: 

// console.log( null || 2 || undefined ); // 2 т.к. ИЛИ если есть условие, которое = true выведет его, null и false = false

// const x = 5;
// const y = 10;

// console.log(x > 0 && y < 20);    //true  5 больше 0 (true) И 10 меньше 20 (тоже true)
// console.log(x < 0 && y > 0);    // false 5 меньше 0 (false) И 10 больше 20 (тоже false)
// console.log(x < 0 && y < 0);    // false 5 меньше 0 (false) И 10 меньше 20 (это true) - если есть false то будет false
// console.log(x > 0 && "Hello");  // Hello 5 больше 0 (true) И дальше идет хелоу, его и выводит

// const a = 0;
// const b = "World";

// console.log(a > 0 || b.length > 0);          // 0 больше 0 (false) ИЛи 5 больше 0 (true) будет true
// console.log(a > 0 || b.length === 0);        // 0 больше 0 (false) ИЛИ 5 строко равно 0 (false) будут false
// console.log(a > 0 || "");                    // 0 больше 0 (false) ИЛИ пустая строка (false) будет 
// пустота, почему? если "" равно false/ потому что строка ни с чем не сравнивается она просто есть
// console.log(a < 0 || "Hello");               // 0 меньше 0 (false) И Hello (true) будет Hello

// let y = 9 * '2';
// console.log(y);        //18
// console.log(typeof y)


