// 5. Создать файл Form.js и реализовать класс для формы под названием Form.
// Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
//   I. Для получения всех значений формы.
//  II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
//  III. Для сброса значений формы.
// Используя данный класс - переписать логику задания №9, связанной с формами.
// Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка.


export class Form {
  constructor(formId) {
    this.form = document.querySelector(`#${formId}`);
  }

  getData() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    data.createdOn = new Date();
    return data;
  }
  isValid() {
    const data = this.getData();
    return (this.form.checkValidity() && data.password === data["repeat-password"]);
  }
  clear() {
    this.form.reset();
  }
}
