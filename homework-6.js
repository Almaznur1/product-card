/*3. Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город,
статус отношений и так далее. Чем больше - тем лучше (но не увлекайтесь, до 10 максимум).
Подберите правильное название для переменной.*/

const user = {
  name: 'Almaz',
  surname: 'Nuriakhmetov',
  email: 'myMail@mail.com',
  job: 'teacher',
  age: 36,
  country: 'Russia',
  city: 'Kazan',
  maritalStatus: 'married',
}


/*4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).
Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3.
Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)*/

const auto = {
  brand: 'Renault',
  model: 'Logan',
  year: '2012',
  color: 'blue',
  gearbox: 'manual',
}

auto.owner = user;


/*5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение,
если есть - прекращает выполнение (ничего не делает)*/

const property = 'maxSpeed';
function addPropertyIfNotExist(obj, property){
  if (!(property in obj)) {
    obj[property] = 160;
  }
}

addPropertyIfNotExist(auto, property);
console.log(auto);


/*6. Написать функцию, которая получает первым аргументом  — объект,
а вторым аргументом — свойство объекта,которое нужно вывести и выводит его значение.*/

function showObjectProperty(obj, property) {
  console.log(obj[property])
}

showObjectProperty(auto, 'model');


/*7. Создать массив, который содержит названия продуктов (просто строки)*/

const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];


/*8. Создать массив, состоящий из объектов, где объект представляет собой
книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
После, используя известный нам метод массив, добавить еще одну книгу в конец списка.
Можете заменить книги на фильмы, или другую сущность, идею вы поняли.*/

let books = [
  {
    title: 'The Richest Man in Babylon',
    author: 'George S. Clason',
    year: '1926',
    coverColor: 'green',
    genre: 'non-fiction',
  },
  {
    title: 'Will Be Done',
    author: 'Nikit Maklakhov',
    year: '2019',
    coverColor: 'blue',
    genre: 'non-fiction',
  },
  {
    title: 'Influence: Science and Practice',
    author: 'Robert B. Cialdini',
    year: '1984',
    coverColor: 'red',
    genre: 'psychology',
  },
]

books.push({
  title: 'Clean Code',
  author: 'Robert Cecil Martin',
  year: '2009',
  coverColor: 'yellow',
  genre: 'software engineering',
})
console.log(books);


/*9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной
(Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте).
С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один*/

const lordOFRingsBooks = [
  {
    title: 'The Fellowship of the Ring',
    author: 'J. R. R. Tolkien',
    year: '1954',
    coverColor: 'green',
    genre: 'fantasy',
  },
  {
    title: 'The Two Towers',
    author: 'J. R. R. Tolkien',
    year: '1954',
    coverColor: 'blue',
    genre: 'fantasy',
  },
  {
    title: 'The Return of the King',
    author: 'J. R. R. Tolkien',
    year: '1955',
    coverColor: 'red',
    genre: 'fantasy',
  },
]

books = [...books, ...lordOFRingsBooks];
console.log(books);


/*10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9.
Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги
(или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. Что я хочу этим сказать:
если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).*/

function addIsModernProperty(arr) {
  arr.map(book => book['isModern'] = book.year >= 2000 ? true : false);
}

addIsModernProperty(books);
console.log(books);
