import { comments } from "./comments.js";

/*2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);


/*3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.),
проверить, есть ли в массиве какая-то определенная сущность.*/

const books = [
  'The Richest Man in Babylon',
  'Will Be Done',
  'Influence: Science and Practice',
  'Clean Code',
  'The Fellowship of the Ring',
  'The Two Towers',
  'The Return of the King',
];

function hasBook(arr, book) {
  return arr.includes(book);
}


/*4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать").
Два вышеуказанных массива с помощью этой функции перевернуть.*/

function reverseArray(arr) {
  arr.reverse();
}

reverseArray(numbers);
reverseArray(books);


/*5. Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива
(https://jsonplaceholder.typicode.com/comments). Данный массив представляет собой пример комментариев в соц. сетях,
поэтому переменная должна быть названа по смыслу. Не забудьте удалить квадратные кавычки у ключей объектов
(можно использовать Chat GPT, что бы не делать это вручную)*/

/*6. Сделать константу экспортируемой, добавив перед "const" ключевое слово "export".
Таким образом мы сможем внедрить переменную из comments.js в homework-7.js и работать с ней.
Когда мы введем название переменной, нам предложит импортировать ее - так и делаем.*/

/*7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"*/

const dotComEmailComments = comments.filter(comment => comment.email.includes('.com'));
console.log(dotComEmailComments);


/*8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1*/

const modifiedComments = comments.map(comment => {
  return { ...comment, postId: comment.id <= 5 ? 2 : 1 };
});


/*9. Перебрать массив, что бы объекты состояли только из айди и имени*/

const commentNames = comments.map(comment => {
  return { id: comment.id, name: comment.name };
});


/*10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.*/

const commentsWithValidation = comments.map(comment => {
  return { ...comment, isInvalid: comment.body.length > 180};
});


/*11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map*/

const emails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, [])

const userEmails = comments.map(comment => comment.email);


/*12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.*/

console.log(emails.toString());
console.log(userEmails.join(', '));
