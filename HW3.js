// ---1 Строки. Установить какие методы строк изменяют начальное значение строки.
// ---2 Заполнить таблицу методов строк

// let str = 'Knowledge of built-in JavaScript methods speeds up a tester`s work.';

// const str = "Hello, my name is John";


// console.log(str.charAt(3)); // возвращает символ по индексу -  w 

// console.log(str[0]);    // возвращает символ по индексу - K

// console.log(str.length); // длина строки - 67

// console.log(str.charAt(str.length -1)); // возвращает символ с конца строки - .

// console.log(str.substring(1, 4));  // возвращает подстроку с 1 по 4 символ - now 

// console.log(str.substr(1, 3));  // Устаревший возвращает подстроку с 1 символа длиной 3 символа - now

// console.log(str.slice(-3)); // возвращает последние 3 символа строки - rk.

// console.log(str.indexOf('l')); // возвращает индекс первого вхождения символа - 4

// console.log(str.lastIndexOf('l')); // возвращает индекс последнего вхождения символа - 16

// console.log(str.split('of')); // разбивает строку на массив по указанному символу - [ 'Knowledge ', ' built-in JavaScript methods speeds up a tester`s work.' ]

// console.log(str.replace('l', 'L')); // заменяет символ на другой - KnowLedge of built...

// console.log(str.replaceAll('l', 'L')); // заменяет все вхождения символа на другой - KnowLedge of buiLt...

// console.log(str.toUpperCase());  // преобразует строку в верхний регистр

// console.log(str.toLowerCase()); // преобразует строку в нижний регистр

// console.log(str.charCodeAt());      // выводит индекс по UTF-16
// console.log(str.concat());          // Объединяет несколько строк в одну
// console.log(str.endsWith());        // Содержит ли начало строки указанный символ или строку. Поиск начинается либо с начала строки, либо с указанной цифры
// console.log(str.includes());        



// ----3 Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)
/* switch (выражение) {
    case значение1:
        Код, который выполнится, если выражение === значение1
      break;
    case значение2:
       Код, который выполнится, если выражение === значение2
      break;
    default:
 Код, который выполнится, если ни одно из значений не совпало*/

// let day = 1;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Понедельник";
//     break;

//   case 2:
//     dayName = "Вторник";
//     break;

//   case 3:
//     dayName = "Среда";
//     break;

//   case 4:
//     dayName = "Четверг";
//     break;

//   case 5:
//     dayName = "Пятница";
//     break;

//   case 6:
//     dayName = "Суббота";
//     break;

//   case 7:
//     dayName = "Воскресение";
//     break;

//   default:
//     dayName = "Неизвестный день";
// }

// console.log(dayName); 


// --- 4 Напишите программу по согласованию отпуска в зависимости от месяца. 
// Если месяц “July” или “August”, то программа должна показать - “approved”, если другие месяцы, то - “denied”.

// let vac = 'August';

// if(vac === 'July' || vac === 'August') {

//     console.log('approved');
// }
// else console.log('denied');

/* --- 5 Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора. 
В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль. 
Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.

*/

// let a = 5;
// let b = 10;
// let operator = '/';

// switch(operator) {
//     case '+':
//       result = a + b;
//       break;

//     case '-':
//       result = a - b;
//       break;

//     case '*':
//       result = a * b;
//       break;

//     case '/':
//       result = a / b;
//       break;
// default: 
//     console.log("Не найдено");
//   }

//   console.log(`Результат: ${a} ${operator} ${b} = ${result}`);




/* --- Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
Улитка ползёт вверх по стене высотой 5 метров. 
Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
За сколько дней она доползет до вершины стены.
*/

// let wall = 5; 
// let oneDay = 3; 
// let oneNight = -2; 
// let countDays = 1; // Первый день улитка уже ползёт вверх
// let distance = oneDay; // Улитка поднялась на 3 метра за 1-й день

// if (distance >= wall) {
//     console.log("Улитка достигла вершины за", countDays, "дней.");
// } else {
//     distance += oneNight; // Сползает ночью
//     countDays++; // Переход ко второму дню

//     if (distance + oneDay >= wall) {
//         console.log("Улитка достигла вершины за", countDays, "дней.");
//     } else {
//         distance += oneNight + oneDay; // Еще один цикл подъема и сползания
//         countDays++;

//         if (distance + oneDay >= wall) {
//             console.log("Улитка достигла вершины за", countDays, "дней.");
//         } else {
//             countDays++; // На 4-й день она точно долезет
//             console.log("Улитка достигла вершины за", countDays, "дней.");
//         }
//     }
// }



// function getInitials(fullName) {
  //   let names = fullName.split(" ");
  //   let initials = names.map((name) => name[0].toUpperCase());
  //   return initials.join(".") + ".";
  // }
  
  // // Примеры использования
  // console.log(getInitials("Иван Петров")); // "И.П."
  // console.log(getInitials("Головань Яна Дмитриевна")); // "М.И.С."


/*
У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
Дайте названия вашим видам кофе.
Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
Компоненты кофе не влияют на стоимость.
Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.*/

