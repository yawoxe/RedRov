/*Дополнение к задаче №2 из предыдущего домашнего задания
2. Определите класс Shape.
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

    Дополнение:
Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата. 
Настройте конструктор экземпляров объекта Square так, чтобы свойству name автоматически присваивалось значение square, 
а sides для свойства автоматически устанавливалось значение 4. 
Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.

Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, 
и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.
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
// // Создаем класс Square, который наследуется от класса Shape

// class Square extends Shape {
//     constructor(sideLength) { 
//         super('square', 4, sideLength);  // Вызываем конструктор родительского класса с именем 'square' и sides = 4
//     }

//     calcArea() {
//         const area = this.sideLength * this.sideLength;
//         console.log(`Площадь ${this.name} равна ${area}`);
//     }
// }

// // Создаем экземпляр класса Square
// const squa = new Square(6); // sideLength = 6

// // Вызываем методы calcPerimeter() и calcArea()
// squa.calcPerimeter(); // Периметр square равен 24
// squa.calcArea();      // Площадь square равна 36



/*Создать классы пользователя и администратора. 
В этом задании мы будем использовать приватные свойства, чтобы скрыть определенные значения и предотвратить прямой доступ к ним. 
Приватные свойства могут быть доступны только внутри объявления класса.
Мы обозначаем частную переменную или функцию символом решетки (#).

Например, если бы у нас был класс Person с номером социального 
страхования и функцией для расчета их налоговой категории, мы бы не 
обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы 
можем сделать эти поля приватными, как в примере ниже:

class Person {
    #socialSecurityNumber;

    #calculateTaxBracket() {
    }
}

Ваша задача:

Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User 
имеет закрытую функцию updatePassword() и публичную функцию resetPassword(). Класс Admin имеет публичную функцию deleteUser().

Параметры для класса User
    username: String
    (private) password: String

Параметры для класса Admin
    username: String
    (private) password: String


Свойства класса Admin
Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
    isAdmin = true;


Функции класса User
resetPassword(newPassword)
Вызывает закрытую функцию updatePassword с новым паролем. 

updatePassword(newPassword)
Устанавливает пароль пользователя на newPassword. Это частная функция.

Функции класса Admin
deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

Результат
[testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

Ограничения
Пароль должен быть частной переменной
updatePassword должен быть частной функцией
Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором*/

// class User {
//     #password; // Приватное свойство для пароля

//     constructor(username, password) {
//         this.username = username;
//         this.#password = password;
//     }

//     resetPassword(newPassword) {            // Публичный метод для сброса пароля
//         this.#updatePassword(newPassword); // Вызов приватного метода для обновления пароля
//     }

//     #updatePassword(newPassword) {       // Приватный метод для обновления пароля
//         this.#password = newPassword;       // Установка нового пароля
//     }
// }

// class Admin extends User {
//     constructor(username, password) {
//         super(username, password);      // Вызов конструктора родительского класса
//         this.isAdmin = true;        // Свойство для администратора
//     }

//     deleteUser(userToDelete) {
//         return `Пользователь ${userToDelete} был удален.`; // Возвращаем сообщение об удалении пользователя
//     }
// }
// // Создаем экземпляры классов User и Admin
// const testUser = new User("user123", "qwerty");
// const testAdmin = new Admin("admin", "admin123");

// // Проверяем методы
// testUser.resetPassword("newpass123");           // Меняем пароль через публичный метод
// console.log(testAdmin.deleteUser("user123"));   // "Пользователь user123 был удален."

// // Результат (массив с экземплярами)
// const result = [testUser, testAdmin];
// console.log(result);         
