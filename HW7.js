// ---------1.Создайте объект cars, где будут 3-4 разные машины с их названиями, моделями, годом выпуска и цветом.
// const cars = [
//     {
//     name: "BMW",
//     model: 'stars',
//     year: 2021,
//     color: 'red'
// },
//     {
//     name: "Opel",
//     model: 'old',
//     year: 2022,
//     color: 'green'
// },
//     {
//     name: "Suzuki",
//     model: 'king',
//     year: 2024,
//     color: 'grey'
// },
//     {
//     name: "Mers",
//     model: 'luxe',
//     year: 2025,
//     color: 'black'
// }
// ];
// console.log(cars);


/* ------------2.Работа с объектом room. Выполняйте пошагово.
    а. Создайте объект room и его параметры:
    ключ height со значением 3
    ключ tv со значением samsung
    ключ big со значением true
b. Выведите в console все параметры объекта room по очереди   -ОК
c. Выведите в console тип данных параметра big                -ОК
d. Выведите в console количество символов в строке параметра tv (длину строки)  -ОК
e. Выведите в console результат расчёта: длина строки параметра tv минус 1 '
f. Поменяйте samsung на все заглавные буквы и выведите в console.  -ОК
g. Замените samsung на LG в нашем объекте room                     -ОК
h. Добавьте в наш объект room ещё одну пару ключ-значение: 
ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"    -ОК
i. выведите chair в console (путем обращения к массиву)
j. Удалите из нашего объекта room параметр big
*/
// const room = {
//     height: 3,
//     tv: 'sumsung',
//     big: true
// };

// console.log(room);   //{ height: 3, tv: 'sumsung', big: true }

// console.log(typeof(room.big));   //boolean

// console.log(room.tv);

// console.log(Object.keys(room.tv).length);  //7

// console.log(Object.keys(room.tv).length - 1);  //6

// const roomtv = room.tv.toUpperCase();
// console.log(roomtv);

// room.tv = 'LG';
// console.log(room);

// room.furniture = ['table', 'chair', 'sofa'];
// console.log(room);

// console.log(room.furniture[1]);

// delete room.big;
// console.log(room);



// // ------------3.Создайте функцию, которая принимает следующий объект как параметр:
//     {name: "dog", legs: 4, color: "yellow"}
//     Возвратите строку: "This yellow dog has 4 legs."

// const dog = {
//     name: "dog",
//     legs: 4,
//     color: "yellow",
// dogFun () {
//     return `This ${dog.color} ${dog.name} has ${dog.legs} legs.`;
// }
// };

// console.log(dog.dogFun());

// ------------4. Есть список людей, которые подписались на международную встречу разработчиков.

//  var developers = [
//      { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
//      { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
//      { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
//      { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
//      { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
//      { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
//      { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
//  ];

//     // Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны.

// const result = developers.filter((dev) => {
//     return dev.language === "JavaScript";    
// });
// console.log(result.length > 0);  //false


// Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. В библиотеке должно быть по 5 книг каждого писателя. 
// Каждая книга должна иметь идентификатор (isbn), имя книги, имя автора, год выпуска, жанр, количество страниц, популярность книги у этого автора (от 1 до 5) и 
// первое предложение/строку.

    // a. Выведите в console названия всех книг.
    // b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
    // c. Отсортируйте библиотеку по году выпуска книг

    
    // Создаем библиотеку книг
const library = [
    { 
        isbn: 12345, 
        title: 'Оно', 
        author: 'Стивен Кинг', 
        year: 1986, 
        genre: 'Ужасы', 
        pages: 1138, 
        popularity: 5, 
        firstSentence: 'Оно вернулось.' 
    },


    { 
        isbn: 12346, 
        title: 'Сияние', 
        author: 'Стивен Кинг', 
        year: 1977, 
        genre: 'Ужасы', 
        pages: 447, 
        popularity: 4, 
        firstSentence: 'Джек Торранс подумал: Офигеть.' 
    },

    { 
        isbn: 12347, 
        title: 'Кэрри', 
        author: 'Стивен Кинг', 
        year: 1974, 
        genre: 'Ужасы', 
        pages: 199, 
        popularity: 3, 
        firstSentence: 'Кэрри знала, что что-то не так.' 
    },
    { 
        isbn: 12348, 
        title: 'Мизери', 
        author: 'Стивен Кинг', 
        year: 1987, 
        genre: 'Триллер', 
        pages: 320, 
        popularity: 5, 
        firstSentence: 'Пол Шелдон не знал, где он.' 
    },
    { 
        isbn: 12349, 
        title: 'Зеленая миля', 
        author: 'Стивен Кинг', 
        year: 1996, 
        genre: 'Драма', 
        pages: 400, 
        popularity: 5, 
        firstSentence: 'Пол Эджкомб был стар.' 
    },

    { 
        isbn: 12350, 
        title: 'Приключения Тома Сойера', 
        author: 'Марк Твен', 
        year: 1876, 
        genre: 'Приключения', 
        pages: 224, 
        popularity: 5, 
        firstSentence: 'Том!' 
    },
    { 
        isbn: 12351, 
        title: 'Приключения Гекльберри Финна', 
        author: 'Марк Твен', 
        year: 1884, 
        genre: 'Приключения', 
        pages: 366, 
        popularity: 4, 
        firstSentence: 'Вы не знаете меня, если не читали книгу.' 
    },
    { 
        isbn: 12352, 
        title: 'Янки из Коннектикута при дворе короля Артура', 
        author: 'Марк Твен', 
        year: 1889, 
        genre: 'Фантастика', 
        pages: 480, 
        popularity: 3, 
        firstSentence: 'Это было в 1879 году.' 
    },
    { 
        isbn: 12353, 
        title: 'Принц и нищий', 
        author: 'Марк Твен', 
        year: 1881, 
        genre: 'Исторический роман', 
        pages: 240, 
        popularity: 4, 
        firstSentence: 'В один прекрасный день родился принц.' 
    },
    { 
        isbn: 12354, 
        title: 'Письма с Земли', 
        author: 'Марк Твен', 
        year: 1909, 
        genre: 'Сатира', 
        pages: 160, 
        popularity: 2, 
        firstSentence: 'Сатана был изгнан с небес.' 
    },

    { 
        isbn: 12355, 
        title: 'Евгений Онегин', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1833, 
        genre: 'Роман в стихах', 
        pages: 240, 
        popularity: 5, 
        firstSentence: 'Мой дядя самых честных правил.' 
    },
    { 
        isbn: 12356, 
        title: 'Капитанская дочка', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1836, 
        genre: 'Исторический роман', 
        pages: 200, 
        popularity: 4, 
        firstSentence: 'Отец мой Андрей Петрович Гринев.' 
    },
    { 
        isbn: '123457', 
        title: 'Пиковая дама', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1834, 
        genre: 'Повесть', 
        pages: 80, 
        popularity: 5, 
        firstSentence: 'Однажды играли в карты у конногвардейца Нарумова.' 
    },
    { 
        isbn: '123458', 
        title: 'Руслан и Людмила', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1820, 
        genre: 'Поэма', 
        pages: 150, 
        popularity: 4, 
        firstSentence: 'У лукоморья дуб зеленый.' 
    },
    { 
        isbn: '123459', 
        title: 'Дубровский', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1841, 
        genre: 'Роман', 
        pages: 160, 
        popularity: 3, 
        firstSentence: 'Несколько лет тому назад в одном из своих поместий жил старинный русский барин.' 
    }
];

// a. Выведите в console названия всех книг.
// console.log("Названия всех книг:");
// library.forEach(book => console.log(book.title));

// b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
// const uniqueAuthors = [...new Set(library.map(el => el.author))];

// const books = []
// for (let i = 0; i < uniqueAuthors.length; i++) {
//     let popularity = 0;
//     let index = null;
//     for (let a = 0; a < library.length; a++) {
//         if (library[a].author === uniqueAuthors[i]) {
//             if (library[a].popularity > popularity) {
//                 popularity = library[a].popularity
//                 index = a
//             }
//         }
//     }
//     books[i] = library[index].title
// }

// for (let i = 0; i < books.length; i++) {
//     console.log(`${uniqueAuthors[i]}: "${books[i]}"`)
// }

 // c. Отсортируйте библиотеку по году выпуска книг
// library.sort((a, b) => a.year - b.year);
// console.log(library);
