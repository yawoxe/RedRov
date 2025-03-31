//  ------------1. Есть класс Song. Выведите на печать автора песни.

    // class Song {
    //     constructor(name, author) {
    //         this._name = name;
    //         this._author = author;
    //     }

    //     get author() {
    //         return this._author;
    //     }

    //     set author(writer) {
    //         this._author = writer;
    //     }
    // }

    // const p = new Song('Hello', 'Adel');
    // console.log(p._author);

/* ---------------2. Определите класс Shape.
    - Он имеет три свойства: name, sides, и sideLength.
    - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину,
        например квадрат или равносторонний треугольник.
    - Добавьте конструктор в этот класс.
    - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
    - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр
        (длину внешнего края фигуры) и записывает результат в консоль.
    - Создайте новый экземпляр класса Shape с именем square.
    - Дайте name ему square, sides = 4 и sideLength = 5​
    - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить,
        записывает ли он результаты вычислений в консоль браузера, как ожидалось.
    - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
    - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.
*/

// class Shape {
//     constructor(name, sides, sideLength) {
//         this.name = name;
//         this.sides = sides;
//         this.sideLength = sideLength;
//     }

//     calcPerimeter() {
//         const per = this.sides * this.sideLength;
//         console.log(`Периметр ${this.name} равен ${per}`);
//     }
// }
// const square = new Shape ('square', 4, 5);
// square.calcPerimeter();
// const triangle = new Shape('triangle',3,3)
// triangle.calcPerimeter()



/*----------3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:
    1. "name" - строка, представляющая имя работника.
    2. "age" - число, представляющее возраст работника.
    3. "position" - строка, представляющая должность работника.
    4. "salary" - число, представляющее зарплату работника.
   
    Требования:
    1. Создайте конструктор класса "Employee", который принимает аргументы
        "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
    2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
    3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать
        новые значения свойств.
*/


// class Employee {
//     constructor(name, age, position, salary) {
//         this._name = name;
//         this._age = age;
//         this._position = position;
//         this._salary = salary;
//     }

//     get name() {
//         return this._name;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(newAge) {
//         if (typeof newAge === 'number' && newAge > 0) {
//             this._age = newAge;
//         } else {
//             console.log('Возраст должен быть положительным числом');
//         }
//     }


//     get position() {
//         return this._position;
//     }

//     set position(newPosition) {
//         if (typeof newPosition === 'string' && newPosition.trim() !== '') {
//             this._position = newPosition;
//         } else {
//             console.log('Должность не может быть пустой строкой');
//         }
//     }

//     get salary() {
//         return this._salary;
//     }

//        set salary(newSalary) {
//         if (typeof newSalary === 'number' && newSalary > 0) {
//             this._salary = newSalary;
//         } else {
//             console.log('Зарплата должна быть неотрицательным числом, не строкой, не пустой');
//         }
//     }
// }

// const employee = new Employee('Саша Сашин', 25, 'Dev', 5000);

// // console.log(employee.name);     // Саша Сашин
// // console.log(employee.age);      // 25
// // console.log(employee.position); // Dev
// // console.log(employee.salary);   // 5000

// // Изменяем свойства через сеттеры
// employee.age = 45;          // Корректное значение
// employee.position = 'Слесарь';
// employee.salary = 5500;

// console.log(employee.age);    
// console.log(employee.position); 
// console.log(employee.salary);   

// // Некорректные значения - ошибка
// employee.age = -5;          // Возраст должен быть положительным числом
// employee.position = '';     //  Должность должна быть непустой строкой
// employee.salary = -7000;  // Зарплата должна быть неотрицательным числом, не строкой, не пустой


/* ---------------4. Создайте класс Person со следующими свойствами:

    a. Конструктор который принимает 4 аргумента:
        - First Name (по умолчанию значение "John")
        - Last Name (по умолчанию значение "Doe")
        - Age (по умолчанию значение 0)
        - Gender (по умолчанию значение "Male").
           
    b. Метод sayFullName без аргументов и возвращает полное имя человека
    c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName
        и возвращает "Welcome to Planet Earth <raceName>".
       
        Пример: если значение raceName "Martians", результат должен быть
        "Welcome to Planet Earth Martians"
*/



// class Person {
//         constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.age = age;
//             this.gender = gender;
//         }

//         sayFullName() {
//             return `${this.firstName}  ${this.lastName}`
//         }

//         static greetExtraTerrestrials(raceName) {
//             return `Welcome to Planet Earth ${raceName}`
//         }

//     }

//     const person1 = new Person(); // Используются значения по умолчанию
//     console.log(person1.sayFullName()); // "John Doe"
    
//     const person2 = new Person('Anna', 'Smith', 25, 'Female');
//     console.log(person2.sayFullName()); // "Anna Smith"
    
    // console.log(Person.greetExtraTerrestrials('Martians'));





/* 5. Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания:
    a. Выведите в console названия всех книг.
    b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
    c. Отсортируйте библиотеку по году выпуска книг
*/

const books = [
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
        popularity: 4, 
        firstSentence: 'Пол Шелдон не знал, где он.' 
    },
    { 
        isbn: 12349, 
        title: 'Зеленая миля', 
        author: 'Стивен Кинг', 
        year: 1996, 
        genre: 'Драма', 
        pages: 400, 
        popularity: 4, 
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
        isbn: 12357, 
        title: 'Пиковая дама', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1834, 
        genre: 'Повесть', 
        pages: 80, 
        popularity: 4, 
        firstSentence: 'Однажды играли в карты у конногвардейца Нарумова.' 
    },
    { 
        isbn: 123458, 
        title: 'Руслан и Людмила', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1820, 
        genre: 'Поэма', 
        pages: 150, 
        popularity: 4, 
        firstSentence: 'У лукоморья дуб зеленый.' 
    },
    { 
        isbn: 123459, 
        title: 'Дубровский', 
        author: 'Александр Сергеевич Пушкин', 
        year: 1841, 
        genre: 'Роман', 
        pages: 160, 
        popularity: 3, 
        firstSentence: 'Несколько лет тому назад в одном из своих поместий жил старинный русский барин.' 
    }
];


class Books {
    constructor(books) {
        this.books = books;
    }

  
    _getBooks() {
          return this.books;
        }


    getBookNames() {
        const bookNames = this.books.map((book) => {
            return book.title;
        });
        return bookNames.join('\n');
    }


    getMostPopularBook() {
        const mostPopularBook = this.books.filter((book) => {
            return book.popularity > 4;
        }).map((book) => {
            return `Most popular book by ${book.author} is ${book.title}.`;
        });
        return mostPopularBook.join('\n');
    }

    

    sortByYear() {
        return this._getBooks().sort((a, b) => a.year - b.year);
    }

    }

  

const libr = new Books(books);
console.log(libr.getBookNames());
console.log(libr.getMostPopularBook());
console.log(libr.sortByYear());
