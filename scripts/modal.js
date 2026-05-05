// 4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal.
// Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:
//   I. Для открытия модального окна.
//  II. Для закрытия модального окна.
//  III. Для проверки, открыто ли сейчас модальное окно.
//  IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку (реализовать через eventListener) и вызывать в конструкторе
// Используя данный класс - переписать логику задания №9, связанной с модальными окнами.
// Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.


export class Modal {
    constructor(modalId) {
    this.modal = document.querySelector(`#${modalId}`);
    this.overlay = document.querySelector(".overlay");
    this.closeModalHandler();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }
  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }
  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }
  closeModalHandler () {
    const closeBtn = this.modal.querySelector(".close-button");
    closeBtn.addEventListener("click", () => this.close());
  }
}
