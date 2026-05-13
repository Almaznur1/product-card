export class Modal {
  constructor(modalId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.handleOverlayClick = () => this.close();
    this.open(shouldCloseOnOverlay);
  }

  open(shouldCloseOnOverlay) {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    const closeButton = this.modal.querySelector('#modal-close-button');
    closeButton.addEventListener('click', this.handleOverlayClick);
    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleOverlayClick);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.removeEventListener('click', this.handleOverlayClick);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
}
